import { useState, useEffect } from "react";
import { BiCheckbox } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";
import { GrCheckbox } from "react-icons/gr";
import { ImCheckboxChecked } from "react-icons/im";
import { TbCheckbox } from "react-icons/tb";
import { deleteTask, changeComplete } from "../../store";
import { useDispatch } from "react-redux";
import { useFetchCategoriesQuery } from "../../store";
import "./task.css";
function Task({ task }) {
  const dispatch = useDispatch();
  const { data } = useFetchCategoriesQuery();

  const [detail, setDetail] = useState(false);
  const [detailOpenTaskId, setDetailOpenTaskId] = useState(null);

  const handleCompletionChange = () => {
    dispatch(changeComplete(task));
  };

  const showDetail = () => {
    setDetailOpenTaskId((prevTaskId) => (prevTaskId === task.id ? null : task.id));
  };
  useEffect(() => {
    const closeDetailOnClickOutside = (event) => {
      if (!event.target.closest(".task__left")) {
        setDetailOpenTaskId(null);
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
        <div className="task__left">
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
            {day} {month}
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
      { detailOpenTaskId === task.id  && (
        <div className="dropdown-content">
          {task.detail}
          <div>category : {task.category ? task.category : "-"}</div>
          <div>complete until : {time}</div>
        </div>
      )}
    </div>
  );
}

export default Task;
