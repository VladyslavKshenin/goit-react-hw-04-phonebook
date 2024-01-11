import React from 'react';
import { nanoid } from 'nanoid/non-secure';
import dataContacts from '../Data/dataContacts.json';
import {ContactForm} from './Form/Form';
import {ContactList} from './List/List';
import { Filter } from './Filter/Filter';
import { Section } from './App.styled'
import {Title} from './App.styled'

class App extends React.Component {
  state = {
    contacts: dataContacts,
    filter: '',
  };

  componentDidMount() {
    const unparsedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(unparsedContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }
  
  addNewContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() === newContact.name.toLowerCase().trim()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, newContact],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilterChange = newFilter => {
    this.setState({ filter: newFilter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <Section>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addNewContact} />
        <Title>Contacts</Title>
        <Filter value={filter} onFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onContactDelete={this.deleteContact}
        />
      </Section>
    );
  }
}

export default App;