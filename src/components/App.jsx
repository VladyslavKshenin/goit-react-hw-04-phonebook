import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid/non-secure';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dataContacts from '../Data/dataContacts.json';
import { ContactForm } from './Form/Form';
import { ContactList } from './List/List';
import { Filter } from './Filter/Filter';
import { Section, Title } from './App.styled';

export default function App() {
   const unparsedContacts = window.localStorage.getItem('contacts');
   const parsedContacts = JSON.parse(unparsedContacts) || [];
   const [contacts, setContacts] = useState(() => parsedContacts || dataContacts);
   const [filter, setFilter] = useState('');

   useEffect(() => {
      window.localStorage.setItem('contacts', JSON.stringify(contacts));
   }, [contacts]);

   const addNewContact = ({ name, number }) => {
      const newContact = {
         id: nanoid(),
         name,
         number,
      };

      if (
         contacts.some(
            (contact) =>
               contact.name.toLowerCase() === newContact.name.toLowerCase().trim()
         )
      ) {
         toast.warn(`${newContact.name} is already in your contacts`, {
            position: 'top-right',
            theme: 'colored',
         });
      } else {
         setContacts((prevContacts) => [...prevContacts, newContact]);
      }
   };

   const deleteContact = (contactId) => {
      setContacts((prevContacts) =>
         prevContacts.filter((contact) => contact.id !== contactId)
      );
   };

   const getFilteredContacts = () => {
      return contacts.filter((contact) =>
         contact.name.toLowerCase().includes(filter.toLowerCase())
      );
   };

   const filteredContacts = getFilteredContacts();

   return (
      <Section>
         <Title>Phonebook</Title>
         <ContactForm onSubmit={addNewContact} />
         <Title>Contacts</Title>
         <Filter value={filter} onFilterChange={setFilter} />
         <ContactList contacts={filteredContacts} onContactDelete={deleteContact} />
         <ToastContainer
            autoClose={false}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
         />
      </Section>
   );
}