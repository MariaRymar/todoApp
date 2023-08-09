import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextareaAutosize from "react-textarea-autosize";
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
import { useFetchCategoriesQuery } from "../../store";
function AddTask() {
  const dispatch = useDispatch();
  const { data } = useFetchCategoriesQuery();
  const { value, detail, dueDate, category } = useSelector((state) => {
    return state.form;
  });

  const [visibleSelect, setVisibleSelect] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const changeFormValue = (e) => {
    dispatch(changeValue(e.target.value));
  };
  const changeFormDetail = (e) => {
    dispatch(changeDetail(e.target.value));
  };
  const changeFormCategory = (categ) => {
    dispatch(changeCategory(categ));
    setVisibleSelect(false);
  };
  const changeFormDueDate = (date) => {
    dispatch(changeDueDate(date.toISOString()));
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(
      addTask({ value, detail, dueDate: dueDate || new Date(), category })
    );
    setIsOpen(false);
  };

  const clickRef = useRef(null);
  const selectRef = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (!clickRef.current) return;
      if (!selectRef.current) return;

      if (!clickRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (!selectRef.current.contains(event.target)) {
        setVisibleSelect(false);
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
          required
        ></input>
        {isOpen ? (
          <div className="addTaskForm">
            <div className="input_container">
              <TextareaAutosize
                className="small_input"
                placeholder="Task details..."
                value={detail}
                onChange={changeFormDetail}
              ></TextareaAutosize>
            </div>

            <div ref={selectRef} value={category} className="dropdown">
              <div
                tabIndex="0"
                autoFocus
                className="small_input select"
                onFocus={() => setVisibleSelect(true)}
                onClick={() => setVisibleSelect(true)}
              >
                <div >{category || "Select"}</div>
                <div>
                  {visibleSelect ? <GoChevronDown /> : <GoChevronLeft />}
                </div>
              </div>
              {visibleSelect && (
                <div  className="dropdown-content">
                  {data.map((formCategory) => (
                    <div
                    tabIndex="0"
                      className="dropdown-item"
                      key={formCategory.id}
                      onClick={() => changeFormCategory(formCategory.label)}
                      onKeyUp={(e) => {
                        if(e.key === 'Enter') {
                          changeFormCategory(formCategory.label)
                        }
                      }}
                    >
                      {formCategory.value !== "" &&
                      formCategory.value !== "completed"
                        ? formCategory.label
                        : null}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <DatePicker
              className="datepicker small_input"
       
              selected={dueDate ? new Date(dueDate) : new Date()}
              onChange={changeFormDueDate}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
            />
            <div>
              <button>Submit</button>
            </div>
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default AddTask;
