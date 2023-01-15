import {Component } from "react";
import PropTypes from "prop-types";
import { Button, Input, Label } from "./ContactForm.styled";

export class ContactForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <Label>Name
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </Label>
                <Label>Number
                    <Input
                        placeholder="000-00-00"
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </Label>
                <Button type="submit">
                    Add contact
                </Button>
            </form>
        );
    };
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};