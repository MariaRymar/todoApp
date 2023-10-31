import { useState, useEffect } from "react";
import { BiCheckbox } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";
import { GrCheckbox } from "react-icons/gr";
import { AiOutlineEdit } from "react-icons/ai";
import { ImCheckboxChecked } from "react-icons/im";
import { TbCheckbox } from "react-icons/tb";
import { deleteTask, changeComplete, editTask } from "../../store";
import { useDispatch } from "react-redux";
import { useFetchCategoriesQuery } from "../../store";

import "./task.css";
function Task({ task, tasksForToday }) {
  const dispatch = useDispatch();
  const { data } = useFetchCategoriesQuery();

  const [taskValuesEdit, setTaskValuesEdit] = useState({
    id: task.id,
    value: task.value,
    detail: task.detail,
    dueDate: task.dueDate,
    date: task.date,
    category: task.category,
    completion: task.completion
  })

  
  const [detailOpenTaskId, setDetailOpenTaskId] = useState(null);
  const [toEdit, setToEdit] = useState(false);

  const handleCompletionChange = () => {
    dispatch(changeComplete(task));
  };

  const showDetail = () => {
    setDetailOpenTaskId((prevTaskId) =>
      prevTaskId === task.id ? null : task.id
    );
  };

  const edit = () => {
    setToEdit(!toEdit);
  };

  const editValue = (e) => {
    setTaskValuesEdit({...taskValuesEdit, value: e.target.value})
  };
  const editDetail = (e) => {
    setTaskValuesEdit({...taskValuesEdit, detail: e.target.value})
  };
  // const editCategory = (e) => {
  //   setTaskValuesEdit({...taskValuesEdit, category: e.target.value})
  // };
  // const changeFormDueDate = (date) => {
  //   dispatch(changeDueDate(date.toISOString()));
  // };

  const onEditSubmit = (e) => {
    e.preventDefault();
    console.log(taskValuesEdit)
    dispatch(editTask(taskValuesEdit));
    setToEdit(false);
    setDetailOpenTaskId(null)
  };

  useEffect(() => {
    const closeDetailOnClickOutside = (event) => {
      if (!event.target.closest(".open")) {
        setDetailOpenTaskId(null);
        setToEdit(false)
      }
    };

    document.addEventListener("click", closeDetailOnClickOutside);
    return () => {
      document.removeEventListener("click", closeDetailOnClickOutside);
    };
  }, []);

  const dueDate = new Date(task.dueDate);
  let day = dueDate.getDate();

  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][dueDate.getMonth()];
  let time =
    dueDate.getHours().toString().padStart(2, "0") +
    ":" +
    dueDate.getMinutes().toString().padStart(2, "0");

  return (
    <div>
      <div className="task">
        <div className="task__left open">
          {task.completion ? (
            <ImCheckboxChecked onClick={handleCompletionChange} />
          ) : (
            <GrCheckbox onClick={handleCompletionChange} />
          )}
          <div
            style={{
              textDecoration: task.completion ? "line-through" : "",
              cursor: "pointer",
            }}
            onClick={showDetail}
          >
            {task.value}
          </div>
        </div>
        <div className="task__right">
          <div
            style={{
              color:
                !task.completion && task.date < Date.parse(new Date())
                  ? "rgb(220, 100, 100)"
                  : "",
            }}
          >
           {tasksForToday&& time} {day} {month}
          </div>
          {data && !task.completion ? (
            data.map((category) => {
              if (
                category.value.toLowerCase() === task.category.toLowerCase()
              ) {
                return (
                  <BiCheckbox
                    key={category.id}
                    style={{ color: `${category.color}` }}
                  />
                );
              }
            })
          ) : (
            <TbCheckbox style={{ color: `green` }} />
          )}
          <FiTrash
            className="bin"
            onClick={() => dispatch(deleteTask(task.id))}
          />
        </div>
      </div>
      {detailOpenTaskId === task.id && (
        <div className="dropdown-content open">
          <button
            onClick={edit}
            style={{
              backgroundColor: "transparent",
              alignSelf: "end",
              cursor: "pointer",
            }}
          >
            <AiOutlineEdit></AiOutlineEdit>
          </button>
          {toEdit ? (
            <form onSubmit={onEditSubmit}> 
              <div>
                title: <input value={taskValuesEdit.value} onChange={editValue} />
              </div>
              <div>
               details: <input value={taskValuesEdit.detail} onChange={editDetail} />
               </div>
              {/*
                <div>
                  category: <input value={taskValuesEdit.category} onChange={editCategory} />
                </div>
              <div>
                complete until: <input value={time} />
              </div> */}
              <button style={{background:'transparent', cursor: 'pointer', height: '2rem', color: 'rgb(49 167 251)'}}>save</button>
            </form>
          ) : (
            <div>
              <div>title: {task.value}</div>
              <div>details: {task.detail}</div>
              <div>category: {task.category ? task.category : "-"}</div>
              <div>complete until: {time}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Task;
