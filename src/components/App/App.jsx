import {ContactForm} from '../ContactForm/ContactForm';
import {ContactList} from '../ContactList/ContactList';
import {Filter} from '../Filter/Filter';
import { ListTitle, Wrapper } from './App.styled';

export const App = () => (
    <Wrapper>
        <h1 style={{margin: 0}}>Phonebook</h1>
        <ContactForm />
        <ListTitle>Contacts</ListTitle>
        <Filter />
        <ContactList />
    </Wrapper>
);