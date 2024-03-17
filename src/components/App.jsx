import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { MainBlock } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const arrContacts = JSON.parse(localStorage.getItem('contacts'));
    console.log('arrContacts: ', arrContacts);
    if (arrContacts) {
      this.setState({ contacts: arrContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const findContact = this.state.contacts.find(el => el.name === name);
    if (findContact) {
      alert(name + ' is already in contacts');
      return;
    }
    const newId = nanoid();
    const newObj = { id: newId, name, number };

    this.setState(({ contacts }) => ({
      contacts: !contacts.length ? [newObj] : [...contacts, newObj],
    }));
  };

  deleteContact = deleteId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== deleteId),
    }));
  };

  filterChange = filter => {
    this.setState({ filter });
  };

  render() {
    const { filter, contacts } = this.state;
    const textFilter = filter.toLowerCase();
    const arrFilter = contacts.filter(({ name }) =>
      name.toLowerCase().includes(textFilter)
    );

    return (
      <MainBlock>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.addContact} />

        <h2>Contacts</h2>
        <Filter
          filterChange={this.filterChange}
          filterValue={this.state.filter}
        />
        <ContactList contacts={arrFilter} deleteId={this.deleteContact} />
      </MainBlock>
    );
  }
}

export default App;
