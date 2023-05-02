import { createContext, useState } from "react";
import axios from "axios";
const Context = createContext();

function ContextProvider({ children }) {
  const [taskList, setNewTaskList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState("");

  // FETCH TASKS

  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3001/tasks");
    setNewTaskList(response.data);
  };

  // FETCH CATEGORIES

  const fetchCategories = async () => {
    const response = await axios.get("http://localhost:3001/categories");
    setCategoryList(response.data);
  };

  // CREATE TASK

  const createTask = async (task) => {
    const chosenDate = task.dueDate;
    let day = chosenDate.getDate();
    let month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][chosenDate.getMonth()];

    const response = await axios.post("http://localhost:3001/tasks", {
      value: task.value,
      dueDate: `${day} ${month}`,
      completion: false,
      category: task.category,
    });
    setNewTaskList([...taskList, response.data]);
  };

  // DELETE TASK

  const deleteTask = async (id) => {
    const response = await axios.delete(`http://localhost:3001/tasks/${id}`);
    let taskToDelete = taskList.filter((task) => task.id !== id);
    setNewTaskList(taskToDelete);
  };

  // UPDATE TASK COMPLETION

  const changeCompletion = async (task, complete) => {
    // const response = await axios.put(`http://localhost:3001/tasks/${taskId}`, {
    //   completion: complete,
    // });
    const response = await axios.put(`http://localhost:3001/tasks/${task.id}`, {
      value: task.value,
      dueDate: task.dueDate,
      category: task.category,
      completion: complete,
    });
    console.log(response.data)

    const updatedTask = taskList.map((taskToUpdate) => {
      if (taskToUpdate.id === task.id) {

        return { ...taskToUpdate, ...response.data };
      }
      return taskToUpdate;
    });

    setNewTaskList(updatedTask);
   
  };

  // CREATE CATEGORY
  const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'pink', 'purple', 'brown']

  const createCategory = async (newCategory) => {
    const response = await axios.post("http://localhost:3001/categories", {
      label: newCategory,
      value: newCategory,
      color: colors[Math.floor(Math.random()*colors.length)]
    });

    setCategoryList([...categoryList, response.data]);
  };

  // SHOW ONE CATEGORY

  const showCategory = async (category, id) => {

    const response = await axios.get(`http://localhost:3001/categories/${id}`);
    setCategory(response.data);
  };


  // DELETE CATEGORY

  const deleteCategory = async (category) => {
    const response = await axios.delete(`http://localhost:3001/categories/${category.id}`);
    let categoryToDelete = categoryList.filter((cat) => cat.id !== category.id);
    let tasksToDelete = taskList.filter(task => { 
      if(task.category === category.label) {

        deleteTask(task.id)
      }
      return task.category !== category.label
    });
    setCategoryList(categoryToDelete);
    setNewTaskList(tasksToDelete)
  };
 

  return (
    <Context.Provider
      value={{
        fetchTasks,
        createTask,
        taskList,
        deleteTask,
        changeCompletion,
        showCategory,
        createCategory,
        categoryList,
        category,
        fetchCategories,
        deleteCategory
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider };
export default Context;
