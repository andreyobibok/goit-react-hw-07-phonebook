import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { addContact } from 'Redux/Contacts/contacts-operation';
import { getAllContacts } from 'Redux/Contacts/contacts-selectors';

import initialState from './initialState';

import css from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const contacts = useSelector(getAllContacts);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const isDublicate = name => {
    const normalizedName = name.toLowerCase();
    const result = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });

    return Boolean(result);
  };

  const handleAddContact = ({ name, number }) => {
    if (isDublicate(name)) {
      return alert(`${name} is already in contacts`);
    }

    dispatch(addContact({ name, number }));
    setState({ ...initialState });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit = handleAddContact({ name, number });
  };

  const { name, number } = state;

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          className={css.input}
          onChange={handleChange}
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          placeholder="Contact Name"
        />

        <label>Number</label>
        <input
          className={css.input}
          onChange={handleChange}
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          placeholder="Contact Number"
        />

        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
