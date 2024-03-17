import React, { Component } from 'react';
import { FormSt, Label } from './ContactForm.styled';

const CARD_CONTACT = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = { ...CARD_CONTACT };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmitForm({
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({ ...CARD_CONTACT });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <FormSt onSubmit={this.handleSubmit}>
          <Label htmlFor="nameId">
            Name
            <input
              type="text"
              name="name"
              id="nameId"
              required
              onChange={this.handleChange}
              value={name}
              placeholder="Name Surname"
            />
          </Label>
          <Label htmlFor="numberId">
            Number
            <input
              type="tel"
              name="number"
              id="numberId"
              required
              onChange={this.handleChange}
              value={number}
              placeholder="999-99-99"
            />
          </Label>
          <button type="submit">Add contact</button>
        </FormSt>
      </>
    );
  }
}

export default ContactForm;
