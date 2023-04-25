import { useState } from "react";
function AddTask({ createTask, categoryList }) {
  //fx default category 

  const [inputValue, setInputValue] = useState({
    value: "",
    dueDate: "",
    category: "Home",
  });
  const submitForm = (e) => {
    e.preventDefault();
    console.log(inputValue);
    createTask(inputValue);
    setInputValue({ value: "", dueDate: "", category: "Home" });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          value={inputValue.value}
          onChange={(e) =>
            setInputValue({ ...inputValue, value: e.target.value })
          }
          placeholder="Write a New Task"
        ></input>
        <select
          value={inputValue.category}
          onChange={(e) => {
            setInputValue({ ...inputValue, category: e.target.value });
          }}
        >
          {categoryList.map((category) => (
            <option key={category.id}>{category.value}</option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default AddTask;
