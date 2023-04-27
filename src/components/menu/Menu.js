import "./menu.css";
import AddCategory from "../AddCategory";
import { BiCheckbox } from "react-icons/bi";
import { TbCheckbox } from "react-icons/tb";

function Menu({ showCategory, createCategory, categoryList, taskList }) {
  return (
    <div className="menu__container">
      <div className="menu__buttons__container">
        <div onClick={() => showCategory("")} className="button__container">
          <div>
            <BiCheckbox />
            <button>Show All</button>
          </div>
          <p>{taskList.length}</p>
        </div>

        {categoryList.map((category) => (
          <div
            className="button__container"
            onClick={() => showCategory(category.value)}
            key={category.id}
          >
            <div>
              {category.id === "complete" ? <TbCheckbox /> : <BiCheckbox />}
              <button>{category.value}</button>
            </div>
            <p>
              {
                taskList.filter((task) =>
                  category.id === "complete"
                    ? task.completion === true
                    : task.category === category.value && !task.completion
                ).length
              }
            </p>
          </div>
        ))}
      </div>
      <AddCategory createCategory={createCategory} />
    </div>
  );
}

export default Menu;
