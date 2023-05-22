import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { createContact } from '../../redux/action';
import { ContactWrapper, Label, Input, Button } from './ContactForm.styled';

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const addContact = contact => dispatch(createContact(contact));

    const onChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setPhone(value);
                break;
            default:
                console.error(`Unexpected attribute - ${name}`);
        }
    };

    const onAddToContactSubmit = e => {
        e.preventDefault();

        if (contacts.items.some(contact => contact.name === name)) alertmessage(name)
        else addContact({ name, phone });

        setName('');
        setPhone('');
    };

    const alertmessage = name => alert(`${name} is already in contacts`);

    return (
        <ContactWrapper onSubmit={onAddToContactSubmit}>
            <Label htmlFor="name">Name</Label>
            <Input
                type="text"
                id="name"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={onChange}
                value={name}
            />
            <Label htmlFor="tel">Number</Label>
            <Input
                type="tel"
                id="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={onChange}
                value={phone}
            />
            <Button type="submit">Add to contact</Button>
        </ContactWrapper>
    );
};