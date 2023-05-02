import { useState } from "react";
import { BiCheckbox } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";
import { GrCheckbox } from "react-icons/gr";
import { ImCheckboxChecked } from "react-icons/im";
import {TbCheckbox} from 'react-icons/tb'
function Task({ task, changeCompletion, deleteTask, categoryList }) {
  const [complete, setComplete] = useState(task.completion);
  const handleCompletionChange = () => {
    setComplete((prev) => !prev);
    changeCompletion(task, !complete);
  };

  return (
    <div className="task">
      <div className="task__left" onClick={handleCompletionChange}>
        {complete ? <ImCheckboxChecked /> : <GrCheckbox />}
        {task.value}
      </div>
      <div className="task__right">
        {task.dueDate}
        {!complete ? categoryList.map((categ) => {
          if (categ.value === task.category) {
            return <BiCheckbox key={categ.id} style={{ color: `${categ.color}` }} />;
          }
        }): <TbCheckbox style={{ color: `green` }} />}

        <FiTrash className="bin" onClick={() => deleteTask(task.id)} />
      </div>
    </div>
  );
}

export default Task;
