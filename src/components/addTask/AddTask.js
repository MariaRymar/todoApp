import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./addTask.css";
import UseTaskContext from "../../hooks/use-task-context";

function AddTask() {
  const { createTask, categoryList, category } = UseTaskContext();

  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState({
    value: "",
    dueDate: new Date(),
    category: category? category.label: "No List",
    detail: "",
  });

  const clickRef = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (!clickRef.current) return;
      if (!clickRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    if (inputValue.value && inputValue.category) {
      createTask(inputValue);
      setInputValue({
        value: "",
        dueDate: new Date(),
        category: "",
        detail: "",
      });
      setIsOpen(false);
    } else {
      alert("add name or category");
    }
  };

  return (
    <div className="addInput">
      <form ref={clickRef} onSubmit={submitForm}>
        <input
          className="styledInput"
          value={inputValue.value}
          onChange={(e) =>
            setInputValue({ ...inputValue, value: e.target.value })
          }
          onClick={() => setIsOpen(true)}
          placeholder="Write a New Task..."
        ></input>
        {isOpen ? (
          <div className="addTaskForm">
            <input
              placeholder="Task details..."
              value={inputValue.detail}
              onChange={(e) =>
                setInputValue({ ...inputValue, detail: e.target.value })
              }
            ></input>
            <select
              value={category? category.label: inputValue.category }
              onChange={(e) => {
                setInputValue({ ...inputValue, category: e.target.value });
              }}
            >
              {categoryList.map((formCategory) =>
                formCategory.value === "completed" ||
                formCategory.value === "" ? null : (
                  <option key={formCategory.id}>{formCategory.label}</option>
                )
              )}
            </select>

            <DatePicker
              className="datepicker"
              selected={inputValue.dueDate}
              onChange={(date) =>
                setInputValue({ ...inputValue, dueDate: date })
              }
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
            />
            <button>Submit</button>
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default AddTask;
