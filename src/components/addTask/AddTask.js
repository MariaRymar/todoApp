import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./addTask.css";
import {
  addTask,
  changeValue,
  changeDetail,
  changeDueDate,
  changeCategory,
} from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function AddTask() {
  const dispatch = useDispatch();
  const { value, detail, dueDate, category, categoryList } = useSelector(
    (state) => {
      return {
        value: state.form.value,
        detail: state.form.detail,
        dueDate: state.form.dueDate,
        category: state.form.category,
        categoryList: state.categories.categoriesList
      };
    }
  );

  const changeFormValue = (e) => {
    dispatch(changeValue(e.target.value));
  };
  const changeFormDetail = (e) => {
    dispatch(changeDetail(e.target.value));
  };
  const changeFormCategory = (categ) => {
    dispatch(changeCategory(categ));
    setVisibleSelect(false)

  };
  const changeFormDueDate = (date) => {
    dispatch(changeDueDate(date));
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addTask({ value, detail, dueDate, category }));
  };

  const [visibleSelect, setVisibleSelect] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const clickRef = useRef(null);
  const selectRef = useRef(null)

  useEffect(() => {
    const handler = (event) => {
      if (!clickRef.current) return;
      if(!selectRef.current) return;

      if (!clickRef.current.contains(event.target)) {
        setIsOpen(false);
        
      }
      if(!selectRef.current.contains(event.target)) {
        setVisibleSelect(false)
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);


  return (
    <div className="addInput">
      <form ref={clickRef} onSubmit={submitForm}>
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

            <div ref={selectRef} value={category}>
              <div onClick={() => setVisibleSelect(true)}>
                {category || 'Select...'}
                {visibleSelect ? <GoChevronDown /> : <GoChevronLeft />}
              </div>
              {visibleSelect && (
                <div>
                  {categoryList.map((formCategory) => (
                    <div key={formCategory.id} onClick={() => changeFormCategory(formCategory.label)}>{formCategory.label}</div>
                  ))}
                </div>
              )}
            </div>

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
        ) : null}
      </form>
    </div>
  );
}

export default AddTask;
