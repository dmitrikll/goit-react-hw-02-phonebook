import PropTypes from "prop-types";
import { Button, Item, List } from "./ContactList.styled";

export function ContactList({ contacts, deleteContact }) {
    return (
        <List>
            {contacts.map(({ id, name, number }) => (
                <Item key={id}>
                    <p>
                        {name}: {number}
                    </p>
                    <Button type="button" onClick={() => deleteContact(id)} value="delete">Delete contact</Button>
                </Item>
            ))}
        </List>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ),
    deleteContact: PropTypes.func.isRequired,
};