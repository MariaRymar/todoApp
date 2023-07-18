import { useDispatch, useSelector } from 'react-redux';
import {changeSearchTerm} from '../../store'
import './searchBar.css';

function SearchBar() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.tasks.searchTerm
  })

  const handleSearchInput = (e) => {
    e.preventDefault();
    dispatch(changeSearchTerm(e.target.value))
  };

  return (
    <div className='search-box'>
      <input
        type="search"
        className='search'
        value={searchTerm}
        placeholder="Search..."
        onChange={handleSearchInput}
      ></input>
    </div>
  );
}

export default SearchBar;
