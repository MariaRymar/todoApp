import "./menu.css";
import AddCategory from "../AddCategory";
import { BiCheckbox } from "react-icons/bi";
import { TbCheckbox } from "react-icons/tb";
import { FiTrash } from "react-icons/fi";
import UseTaskContext from "../../hooks/use-task-context";
import Calendar from "../calendar/Calendar";

function Menu() {

  const { taskList, showCategory, createCategory, categoryList, deleteCategory, category, navigate,currentPath } = UseTaskContext();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(currentPath)

    navigate('/calendar')

  }
  return (
    <div className="menu__container">
      <div className="menu__buttons__container">
        {categoryList.map((mapCategory) => {
         return ( <div
            className={category.label === mapCategory.label ? 'button__container active' :`button__container`}
            onClick={() => showCategory(mapCategory.value, mapCategory.id)}
            key={mapCategory.id}
          >
            <div>
              {mapCategory.value === "completed" ? <TbCheckbox /> : <BiCheckbox style={{'color': `${mapCategory.color}`}} />}
              <button>{mapCategory.label}</button>
            </div>
            <div>
              {mapCategory.value === "completed" ||
              mapCategory.value === "" ? null : (
                <FiTrash onClick={() => deleteCategory(mapCategory)}></FiTrash>
              )}
              <p>
                {
                  taskList.filter((task) =>
                  mapCategory.value === "completed"
                      ? task.completion === true
                      : mapCategory.value === "" && !task.completion
                      ? task
                      : task.category === mapCategory.label && !task.completion
                  ).length
                }
              </p>
            </div>
          </div>
        )})}
      </div>
      <AddCategory createCategory={createCategory} />
      <Calendar onClick={handleClick} />
    </div>
  );
}

export default Menu;
