import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./addTask.css";
import UseTaskContext from "../../hooks/use-task-context";
import {addTask, changeValue, changeDetail, changeDueDate, changeCategory} from '../../store';
import {useDispatch, useSelector} from 'react-redux'


function AddTask() {
  const dispatch = useDispatch();
  const {value, detail, dueDate, category} = useSelector((state) => {
    return {value: state.form.value, detail: state.form.detail, dueDate: state.form.dueDate, category: state.form.category}
  })

  const changeFormValue = (e) => {
    dispatch(changeValue(e.target.value))
  }
  const changeFormDetail = (e) => {
    dispatch(changeDetail(e.target.value))
  }
  const changeFormCategory = (e) => {
    dispatch(changeCategory(e.target.value))
  }
  const changeFormDueDate = (e) => {
    dispatch(changeDueDate(e.target.value))
  }

  const submitForm = (e) => {
    e.preventDefault()
    dispatch(addTask({value, detail, dueDate}))
  }

  // const { createTask, categoryList, category } = UseTaskContext();

  const [isOpen, setIsOpen] = useState(false);
  // const [inputValue, setInputValue] = useState({
  //   value: "",
  //   dueDate: new Date(),
  //   category: category? category.label: "No List",
  //   detail: "",
  // });

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

  // const submitForm = (e) => {
  //   e.preventDefault();
  //   if (inputValue.value && inputValue.category) {
  //     createTask(inputValue);
  //     setInputValue({
  //       value: "",
  //       dueDate: new Date(),
  //       category: "",
  //       detail: "",
  //     });
  //     setIsOpen(false);
  //   } else {
  //     alert("add name or category");
  //   }
  // };

  return (
    <div className="addInput">
      <form 
      ref={clickRef} 
      onSubmit={submitForm}>
        <input
          className="styledInput"
          value={value}
          onChange={changeFormValue}
          onClick={() => setIsOpen(true)}
          placeholder="Write a New Task..."
        ></input>
        {isOpen ? (
          <div className="addTaskForm">
            <input
              placeholder="Task details..."
              value={detail}
              onChange={changeFormDetail}
            ></input>
             <select
              value={
                // category? category.label: 
                category[0]}
              onChange={changeFormCategory}
            >
              {/* {categoryList.map((formCategory) =>
                formCategory.value === "completed" ||
                formCategory.value === "" ? null : (
                  <option key={formCategory.id}>{formCategory.label}</option>
                )
              )} */}
            </select>

            <DatePicker
              className="datepicker"
              selected={dueDate}
              onChange={changeFormDueDate}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
            />
            <button>Submit</button>
          </div>
          ) :  null} 
      </form>
    </div>
  );
}

export default AddTask;
