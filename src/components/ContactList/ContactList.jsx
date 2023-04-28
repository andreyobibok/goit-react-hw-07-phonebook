import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'Redux/ContactBook/contacts-selectors';
import { removeContact } from 'Redux/ContactBook/contacts-slice';

import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const handleRemoveContact = id => {
    dispatch(removeContact(id));
  };

  const names = contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name} : {number}
      <button
        className={css.button}
        onClick={() => handleRemoveContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  ));

  return (
    <div>
      <ul className={css.list}>{names}</ul>
    </div>
  );
};

export default ContactList;
