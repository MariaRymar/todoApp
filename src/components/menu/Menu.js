import "./menu.css";
import AddCategory from "./AddCategory";
import { BiCheckbox } from "react-icons/bi";
import { TbCheckbox } from "react-icons/tb";
import { FiTrash } from "react-icons/fi";
import UseTaskContext from "../../hooks/use-task-context";
import { FcCalendar } from "react-icons/fc";
import Link from "../routing/Link";
import {useSelector, useDispatch} from 'react-redux'
import {removeCategory} from '../../store';

function Menu() {
  // const {
  //   taskList,
  //   showCategory,
  //   createCategory,
  //   categoryList,
  //   deleteCategory,
  //   category,
  // } = UseTaskContext();
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => {
    return state.categories.categoriesList;
  });

  return (
    <div className="menu__container">
      {/* <Link to="/"> */}
        <div className="menu__buttons__container">
          {categoryList.map((mapCategory) => {
            return (
              <div
                className={
                  // category.label === mapCategory.label
                  //   ? "button__container active"
                    // :
                     `button__container`
                }
                // onClick={() => showCategory(mapCategory.value, mapCategory.id)}
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
                <div className="icons__container">
                  <div>
                    {mapCategory.value === "completed" ||
                    mapCategory.value === "" ? null : (
                      <FiTrash
                        onClick={() => dispatch(removeCategory(mapCategory.id))}
                      ></FiTrash>
                    )}
                  </div>
                  {/* <div>
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
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      {/* </Link> */}
      <AddCategory 
      // createCategory={createCategory}
       />
      {/* <Link to="/calendar">
        <div className="button__container calendar-container">
          <div className="calendar">
            <FcCalendar />
            Calendar
          </div>
        </div>
      </Link> */}
    </div>
  );
}

export default Menu;
