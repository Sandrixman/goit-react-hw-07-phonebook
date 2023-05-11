import { useDispatch, useSelector } from 'react-redux';
import { findContact } from 'redux/phonebook/phonebookSlice';
import { takeFilterValue } from 'redux/phonebook/phonebookSelectors';
import { nanoid } from 'nanoid';
import { FilterWrapper } from './Filter.styled';

const id = nanoid();

const Filter = () => {
  const filter = useSelector(takeFilterValue);
  const dispatch = useDispatch();

  const changeFilter = e => {
    const inputValue = e.currentTarget.value;
    dispatch(findContact(inputValue));
  };

  return (
    <FilterWrapper>
      <label htmlFor={id}>Find contacts by name</label>
      <input id={id} type="text" onChange={changeFilter} value={filter} />
    </FilterWrapper>
  );
};

export default Filter;
