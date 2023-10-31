import "./menu.css";
import AddCategory from "./AddCategory";
import { BiCheckbox } from "react-icons/bi";
import { TbCheckbox } from "react-icons/tb";
import { FiTrash } from "react-icons/fi";
import { FcCalendar } from "react-icons/fc";
import Link from "../routing/Link";
import { useSelector, useDispatch } from "react-redux";
import { changeChosenCategory } from "../../store";
import {
  useFetchCategoriesQuery,
  useDeleteCategoryMutation,
} from "../../store";
import Skeleton from "../Skeleton";
import UseTaskContext from "../../hooks/use-task-context";


function Menu({
  // data, error, isLoading, deleteCategory, chosenCategory, taskList
}) {
  const { data, error, isLoading } = useFetchCategoriesQuery();

  const [deleteCategory, results] = useDeleteCategoryMutation();

  const dispatch = useDispatch();

  const { chosenCategory, taskList } = useSelector((state) => {
    return state.tasks;
  });
  const { currentPath } = UseTaskContext();


  const handleDeleteCategory = (category, event) => {
    event.stopPropagation();
    deleteCategory(category.id)
  };

  let content;
  if (isLoading) {
    content = <Skeleton times={5} />;
  } else if (error) {
    content = <div>Error</div>;
  } else {
    content = (
      <div className="menu__buttons__container">
        {data &&
          data.map((mapCategory) => {
            return (
              <div
                className={
                  currentPath=== '/'&&
                  chosenCategory.toLowerCase() ===
                  mapCategory.value.toLowerCase()
                    ? "button__container active"
                    : `button__container`
                }
                onClick={() =>
                  dispatch(changeChosenCategory(mapCategory.value))
                }
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
                      className='bin'
                        onClick={(event) =>
                          handleDeleteCategory(mapCategory, event)
                        }
                      ></FiTrash>
                    )}
                  </div>
                  <div>
                    {
                      taskList.filter((task) =>
                        mapCategory.value === "completed"
                          ? task.completion === true
                          : mapCategory.value === ""
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
    );
  }

  return (
    <div className="menu__container">
      <Link to="/">
      {content}
      </Link>
      <AddCategory />
      <Link to="/calendar">
      <div onClick={() =>  dispatch(changeChosenCategory(''))} className={`button__container calendar-container ${currentPath==='/calendar' ? 'active' : ''}`}>
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
