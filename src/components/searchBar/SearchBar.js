import UseTaskContext from "../../hooks/use-task-context";
import { useState } from "react";

function SearchBar() {
  const { handleSearchTask } = UseTaskContext();
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);

    handleSearchTask(searchInput);
  };

  return (
    <div>
      <input
        type="search"
        value={searchInput}
        placeholder="Search..."
        onChange={handleSearch}
      ></input>
    </div>
  );
}

export default SearchBar;
