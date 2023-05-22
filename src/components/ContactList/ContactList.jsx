import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsSlice';
import ContactItem from '../ContactItem/ContactItem';
import { Contacts } from './ContactList.styled';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const removeContact = id => dispatch(deleteContact(id));

    const getFilterNormalize = () => filter.toLowerCase();

    const getFilteredContacts = () =>
        contacts.filter(contact =>
            contact.name.toLowerCase().includes(getFilterNormalize())
        );

    return (
        <Contacts>
            {getFilteredContacts().map(({ id, name, number }) => (
                <ContactItem
                    name={name}
                    key={id}
                    id={id}
                    number={number}
                    deleteContact={removeContact}
                />
            ))}
        </Contacts>
    )
};