import "./menu.css";
import AddCategory from "../AddCategory";
import { BiCheckbox } from "react-icons/bi";
import { TbCheckbox } from "react-icons/tb";
import { FiTrash } from "react-icons/fi";
import UseTaskContext from "../../hooks/use-task-context";
import { FcCalendar } from "react-icons/fc";
import Link from "../Link";



function Menu() {
  const {
    taskList,
    showCategory,
    createCategory,
    categoryList,
    deleteCategory,
    category
  } = UseTaskContext();


  return (
    <div className="menu__container">
      <div className="menu__buttons__container">
        {categoryList.map((mapCategory) => {
          return (
            <div
              className={
                category.label === mapCategory.label
                  ? "button__container active"
                  : `button__container`
              }
              onClick={() => showCategory(mapCategory.value, mapCategory.id)}
              key={mapCategory.id}
            >
              <div>
                {mapCategory.value === "completed" ? (
                  <TbCheckbox />
                ) : (
                  <BiCheckbox style={{ color: `${mapCategory.color}` }} />
                )}
                <button>{mapCategory.label}</button>
              </div>
              <div>
                {mapCategory.value === "completed" ||
                mapCategory.value === "" ? null : (
                  <FiTrash
                    onClick={() => deleteCategory(mapCategory)}
                  ></FiTrash>
                )}
                <p>
                  {
                    taskList.filter((task) =>
                      mapCategory.value === "completed"
                        ? task.completion === true
                        : mapCategory.value === "" && !task.completion
                        ? task
                        : task.category === mapCategory.label &&
                          !task.completion
                    ).length
                  }
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <AddCategory createCategory={createCategory} />
      <Link to="/calendar">
        <div className="button__container calendar-container">
          <div className="calendar">
            <FcCalendar />
            Calendar
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Menu;
