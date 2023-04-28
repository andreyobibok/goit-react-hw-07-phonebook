import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import css from './ContactBook.module.css';

const ContactBook = () => {
  return (
    <div className={css.wrapper}>
      <h2>Phonebook</h2>
      <ContactForm />
      <Filter />
      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
};

export default ContactBook;
