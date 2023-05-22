import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { createContact, deleteContact, fetchContacts } from './action';

const handleFulfilled = (state, { payload }) => {
    state.items = payload;
    state.isLoading = false;
    state.error = null;
};

const handleRejected = (state, { error: { message } }) => {
    console.log(message);
    state.error = `Oops! We have a problem: ${message}.`;
    state.isLoading = false;
};

const handlePendidng = state => {
    state.isLoading = true;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.fulfilled, handleFulfilled)
            .addCase(createContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.items.findIndex(
                    task => task.id === action.payload.id
                );
                state.items.splice(index, 1);
            })
            .addMatcher(
                isAnyOf(
                    fetchContacts.pending,
                    createContact.pending,
                    deleteContact.pending
                ),
                handlePendidng
            )
            .addMatcher(
                isAnyOf(
                    fetchContacts.rejected,
                    createContact.rejected,
                    deleteContact.rejected
                ),
                handleRejected
            );
    },
});

export const contactReducer = contactsSlice.reducer;