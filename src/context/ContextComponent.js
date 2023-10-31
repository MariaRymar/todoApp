import { createContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../store";

//
// import { useSelector, useDispatch } from "react-redux";
import { changeChosenCategory } from "../store";
import {
  useFetchCategoriesQuery,
  useDeleteCategoryMutation,
} from "../store";


import { BiCheckbox } from "react-icons/bi";
import { TbCheckbox } from "react-icons/tb";
import { FiTrash } from "react-icons/fi";
//

const Context = createContext();

function ContextProvider({ children, basename }) {
  let path = window.location.pathname;
  if (path.startsWith(basename)) {
    path = path.slice(basename.length);
  }

  const [currentPath, setCurrentPath] = useState(path);

  // TASKLIST

  const dispatch = useDispatch();
  const [isLoadingTasks, setIsLoadingTasks] = useState(false);
  const [loadingTasksError, setLoadingTasksError] = useState(null);

  const { taskList, chosenCategory, searchTerm } = useSelector(
    ({ tasks: { taskList, searchTerm, chosenCategory } }) => {
      const filteredTasks = taskList.filter((task) => {
        if (
          chosenCategory &&
          chosenCategory !== "completed" &&
          chosenCategory !== ""
        ) {
          return (
            !task.completion &&
            task.category.toLowerCase() === chosenCategory.toLowerCase() &&
            task.value.toLowerCase().includes(searchTerm.toLowerCase())
          );
        } else if (
          chosenCategory &&
          chosenCategory === "completed" &&
          chosenCategory !== ""
        ) {
          return (
            task.completion &&
            task.value.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }
        return task.value.toLowerCase().includes(searchTerm.toLowerCase());
      });

      return {taskList: filteredTasks, chosenCategory, searchTerm };
    }
  );


  useEffect(() => {
    setIsLoadingTasks(true);
    dispatch(fetchTasks())
      .unwrap()
      .catch((e) => setLoadingTasksError(e))
      .finally(() => setIsLoadingTasks(false));
  }, [dispatch]);

// Menu 
// const menuDispatch = useDispatch()
// const { data, error, isLoading } = useFetchCategoriesQuery();

//   const [deleteCategory, results] = useDeleteCategoryMutation();

//   const handleDeleteCategory = (category, event) => {
//     event.stopPropagation();
//     deleteCategory(category.id)
//   };
//   const handleChangeChosenCategory =(mapCategoryValue) => {
//     menuDispatch(changeChosenCategory(mapCategoryValue))
//   } 
 
 

//   // NAVIGATION

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);
    return window.removeEventListener("popstate", handler);
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", basename + to);
    setCurrentPath(to);
  };


  return (
    <Context.Provider
      value={{
        isLoadingTasks,
        loadingTasksError, 
        taskList,
        chosenCategory,
        navigate,
        currentPath,
        searchTerm


      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider };
export default Context;
