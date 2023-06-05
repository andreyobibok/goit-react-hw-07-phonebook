import { useSelector, useDispatch } from 'react-redux';

import { getFilter } from 'Redux/Filter/filter-selectors';
import { setFilter } from 'Redux/Filter/filter-slice';

import css from './ContactsFilter.module.css';

const ContactsFilter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={css.wrapper}>
      <label>Find contacts by name</label>
      <input
        className={css.input}
        onChange={handleFilter}
        name="filter"
        type="text"
        value={filter}
        placeholder="Search Contact"
      />
    </div>
  );
};

export default ContactsFilter;
