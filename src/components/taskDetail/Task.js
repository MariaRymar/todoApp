import { useState } from "react";
import { BiCheckbox } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";
import { GrCheckbox } from "react-icons/gr";
import { ImCheckboxChecked } from "react-icons/im";
import { TbCheckbox } from "react-icons/tb";
import { removeTask } from "../../store";
import { useDispatch, useSelector } from "react-redux";

function Task({
  task,
  // changeCompletion,
  //  deleteTask,
  //  categoryList
}) {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => {
    return state.categories;
  });
  const [complete, setComplete] = useState(task.completion);
  const [detail, setDetail] = useState(false);

  const handleCompletionChange = () => {
    setComplete((prev) => !prev);
    // changeCompletion(task, !complete);
  };

  const showDetail = () => {
    setDetail(!detail);
  };

  return (
    <div onClick={showDetail}>
      <div className="task">
        <div className="task__left">
          {complete ? (
            <ImCheckboxChecked
            onClick={handleCompletionChange}
            />
          ) : (
            <GrCheckbox
             onClick={handleCompletionChange}
            />
          )}
          {task.value}
        </div>
        <div className="task__right">
          {task.dueDate}
         {/* {!complete ? categoryList.map((categ) => {
              if (categ.value === task.category) {
                return (
                  <BiCheckbox
                    key={categ.id}
                    style={{ color: `${categ.color}` }}
                  />
                );
              }
             : <TbCheckbox style={{ color: `green` }}/>)} */}

        
          <FiTrash
            className="bin"
            onClick={() => dispatch(removeTask(task.id))}
          />
        </div>
      </div>
      {detail && <div>{task.detail}</div>}
    </div>
  );
}

export default Task;
