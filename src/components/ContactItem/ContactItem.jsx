import PropTypes from 'prop-types';
import { FiGithub, FiTrash2 } from "react-icons/fi";
import { Contact, Avatar, Name, Phone, Btn } from './ContactItem.styled';

export const ContactItem = ({ name, id, number, deleteContact }) => (
    <Contact name="contact">
        <Avatar><FiGithub size={24}/></Avatar>
        <div>
            <Name>{name}</Name>
            <Phone>{number}</Phone>
        </div>
        <Btn type="button" onClick={() => deleteContact(id)} id={id}><FiTrash2 size={24}/></Btn>
    </Contact>
);

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
};