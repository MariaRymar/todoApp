import { useState } from "react";
import { BiCheckbox } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";
import { GrCheckbox } from "react-icons/gr";
import { ImCheckboxChecked } from "react-icons/im";
import { TbCheckbox } from "react-icons/tb";
import { removeTask, changeComplete , deleteTask} from "../../store";
import { useDispatch, useSelector } from "react-redux";

function Task({ task }) {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => {
    return state.categories.categoriesList;
  });

  const [detail, setDetail] = useState(false);

  const handleCompletionChange = () => {
    dispatch(changeComplete(task.id));
  };

  const showDetail = () => {
    setDetail(!detail);
  };

  return (
    <div>
      <div className="task">
        <div className="task__left">
          {task.completion ? (
            <ImCheckboxChecked onClick={handleCompletionChange} />
          ) : (
            <GrCheckbox onClick={handleCompletionChange} />
          )}
          <div style={{ cursor: "pointer" }} onClick={showDetail}>
            {task.value}
          </div>
        </div>
        <div className="task__right">
          {task.dueDate}
          {!task.completion ? (
            categoryList.map((categ) => {
              if (categ.value.toLowerCase() === task.category.toLowerCase()) {
                return (
                  <BiCheckbox
                    key={categ.id}
                    style={{ color: `${categ.color}` }}
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
      {detail && <div>{task.detail}</div>}
    </div>
  );
}

export default Task;
