import "./menu.css";
import AddCategory from "./AddCategory";
import { BiCheckbox } from "react-icons/bi";
import { TbCheckbox } from "react-icons/tb";
import { FiTrash } from "react-icons/fi";
import UseTaskContext from "../../hooks/use-task-context";
import { FcCalendar } from "react-icons/fc";
import Link from "../routing/Link";
import { useSelector, useDispatch } from "react-redux";
import { changeChosenCategory } from "../../store";
import {
  useFetchCategoriesQuery,
  useDeleteCategoryMutation,
} from "../../store";

function Menu() {
  const { data, error, isLoading } = useFetchCategoriesQuery();

  const [deleteCategory, results] = useDeleteCategoryMutation();

  // let content;
  // if (isLoading) {
  //   content = <div>Loading...</div>;
  // } else if (error) {
  //   content = <div>Error</div>;
  // } else {
  //   content = data.map((cat) => {
  //     return <div key={cat.id}>{cat.value}

  //     <button onClick={() => deleteCategory(cat.id)}>DELETE</button>
      
  //     </div>;
  //   });
  // }



  const dispatch = useDispatch();

  const {chosenCategory, taskList} = useSelector((state) => {
    return state.tasks

  })



  return (
  //   <div>
  //     {content}
  //     <AddCategory />
  //   </div>
  // );
  <div className="menu__container">
    {/* <Link to="/"> */}
      <div className="menu__buttons__container">
        {data && data.map((mapCategory) => {

          return (
            <div
              className={
                chosenCategory.toLowerCase() === mapCategory.label.toLowerCase()
                  ? "button__container active"
                  :
                   `button__container`
              }
              onClick={() => dispatch(changeChosenCategory(mapCategory.value))}
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
                    onClick={() => deleteCategory(mapCategory.id)}
                    ></FiTrash>
                  )}
                </div>
                <div>
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
                </div>
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
