export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;
export const getLoadingStatus = state => state.contacts.isLoading;
export const getErrorStatus = state => state.contacts.error;