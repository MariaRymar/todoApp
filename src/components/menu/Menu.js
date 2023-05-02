import "./menu.css";
import AddCategory from "../AddCategory";
import { BiCheckbox } from "react-icons/bi";
import { TbCheckbox } from "react-icons/tb";
import { FiTrash } from "react-icons/fi";
function Menu({
  showCategory,
  createCategory,
  categoryList,
  taskList,
  deleteCategory,
}) {
  return (
    <div className="menu__container">
      <div className="menu__buttons__container">
        {/* <div onClick={() => showCategory("")} className="button__container">
          <div>
            <BiCheckbox />
            <button>Show All</button>
          </div>
          <p>{taskList.length}</p>
        </div> */}

        {categoryList.map((category) => (
          <div
            className="button__container"
            onClick={() => showCategory(category.value, category.id)}
            key={category.id}
          >
            <div>
              {category.value === "completed" ? <TbCheckbox /> : <BiCheckbox style={{'color': `${category.color}`}} />}
              <button>{category.label}</button>
            </div>
            <div>
              {category.value === "completed" ||
              category.value === "" ? null : (
                <FiTrash onClick={() => deleteCategory(category)}></FiTrash>
              )}
              <p>
                {
                  taskList.filter((task) =>
                    category.value === "completed"
                      ? task.completion === true
                      : category.value === "" && !task.completion
                      ? task
                      : task.category === category.label && !task.completion
                  ).length
                }
              </p>
            </div>
          </div>
        ))}
      </div>
      <AddCategory createCategory={createCategory} />
    </div>
  );
}

export default Menu;
