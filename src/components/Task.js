import { useState } from "react";
import { BiCheckbox } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";
import {GrCheckbox, GrCheckboxSelected} from 'react-icons/gr';
import { ImCheckboxChecked } from 'react-icons/im'

function Task({ task, changeCompletion, deleteTask }) {
  const [complete, setComplete] = useState(task.completion);
  const handleCompletionChange = () => {
    setComplete((prev) => !prev);
    changeCompletion(task, !complete);
  };

  return (
    <div className="task">
      <div className='task__left' onClick={handleCompletionChange}>
        {complete ?<ImCheckboxChecked /> :<GrCheckbox />}
        {task.value}
      </div>
      <div className='task__right'>
        {task.dueDate}
        <BiCheckbox />
        <FiTrash className='bin' onClick={() => deleteTask(task.id)}/>
      </div>
    </div>
  );
}

export default Task;
