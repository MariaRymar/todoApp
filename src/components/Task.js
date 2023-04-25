import { useState } from "react";
import { BiCheckbox } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";
function Task({ task, changeCompletion }) {
  const [complete, setComplete] = useState(task.completion);
  const handleCompletionChange = () => {
    console.log(task);
    setComplete((prev) => !prev);
    changeCompletion(task.id, complete);
  };
  return (
    <div className="task">
      <div className='task__left'>
        <input
          type="checkbox"
          checked={complete}
          onChange={handleCompletionChange}
        ></input>
        {task.value}
      </div>
      <div className='task__right'>
        {task.dueDate}
        <BiCheckbox />
        {task.category}
        <FiTrash />
      </div>
    </div>
  );
}
export default Task;
