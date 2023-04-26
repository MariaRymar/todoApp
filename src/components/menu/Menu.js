import "./menu.css";
import AddCategory from "../AddCategory";
import { BiCheckbox } from "react-icons/bi";

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
              <BiCheckbox />
              <button>{category.value}</button>
            </div>
            <p>{taskList.filter(task => task.category === category.value).length}</p>
          </div>
        ))}
      </div>
      <AddCategory createCategory={createCategory} />
    </div>
  );
}

export default Menu;
