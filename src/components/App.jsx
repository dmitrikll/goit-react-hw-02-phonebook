import {
    Component,
    nanoid,
    Report,
    Section,
    ContactForm,
    ContactList,
    Filter,
} from 'utils/allComponents';

export class App extends Component {
    state = {
        contacts: [
            { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
            { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
            { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
            { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    addContact = event => {
        event.preventDefault();

        const form = event.target;
        const { name, number } = form.elements;

        const contact = {
            name: name.value,
            number: number.value,
            id: nanoid(),
        };

        if (
            this.state.contacts.find(
                contact =>
                    contact.name.toLowerCase() === name.value.toLowerCase()
            )
        ) {
            Report.info('Contact is present in the list!', ' ', 'Ok');
            form.reset();
            return;
        }

        this.setState(prevState => ({
            contacts: [...prevState.contacts, contact],
        }));
        form.reset();
    };

    deleteContact = id => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== id),
        }));
    };

    inputFilter = event => {
        this.setState({ filter: event.currentTarget.value });
    };

    visibleContact = () => {
        const { filter, contacts } = this.state;
        const normalizeFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizeFilter)
        );
    };

    render() {
        const { filter, contacts } = this.state;
        const filterContact = this.visibleContact();
        return (
            <>
                <Section title="Phonebook">
                    <ContactForm onSubmit={this.addContact} />
                </Section>
                <Section title="Contacts">
                    {contacts.length > 1 && (
                        <Filter value={filter} onChange={this.inputFilter} />
                    )}
                    {contacts.length > 0 ? (
                        <ContactList
                            contacts={filterContact}
                            deleteContact={this.deleteContact}
                        />
                    ) : (
                        Report.info('Contact list is empty!', ' ', 'Ok')
                    )}
                </Section>
            </>
        );
    }
}
