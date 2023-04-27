import { useState, useEffect } from "react";
import Menu from "./components/menu/Menu";
import TaskList from "./components/taskList/TaskList";
import AddTask from "./components/addTask/AddTask";
import GreetDate from "./components/GreetDate";

function App() {
  const [categoryList, setCategoryList] = useState([
    { id: "hm", value: "Home" },
    { id: "wk", value: "Work" },
    { id: "complete", value: "Completed" },
  ]);
  const [category, setCategory] = useState("");
  const [taskList, setNewTaskList] = useState([
    {
      id: "d34",
      value: "Buy milk",
      dueDate: "18 Mar",
      completion: false,
      category: "Home",
    },
    {
      id: "d54",
      value: "Go to the gym",
      dueDate: "13 Mar",
      completion: false,
      category: "Home",
    },
    {
      id: "d44",
      value: "Schedule a meeting",
      dueDate: "1 Mar",
      completion: false,
      category: "Work",
    },
  ]);

  const createTask = (task) => {
    console.log(task.dueDate);
    const chosenDate = task.dueDate;
    let day = chosenDate.getDate();
    let month = chosenDate.getMonth() + 1;
    let year = chosenDate.getFullYear();

    setNewTaskList([
      ...taskList,
      {
        id: Math.random(),
        value: task.value,
        dueDate: `${day}.${month}.${year}`,
        completion: false,
        category: task.category,
      },
    ]);
  };

  const showCategory = (category) => {
    setCategory(category);
  };

  const createCategory = (newCategory) => {
    console.log(newCategory);
    setCategoryList([
      ...categoryList,
      { id: Math.random(), value: newCategory },
    ]);
  };

  const changeCompletion = (id, complete) => {
    const updatedTask = taskList.find((task) => task.id === id);

    if (updatedTask) {
      updatedTask.completion = complete;
    }

    setNewTaskList([...taskList]);
  };

  const deleteTask = (id) => {
    let taskToDelete = taskList.filter((task) => task.id !== id);
    setNewTaskList(taskToDelete);
  };

  return (
    <div className="container main__container">
      <Menu
        taskList={taskList}
        categoryList={categoryList}
        createCategory={createCategory}
        showCategory={showCategory}
      />
      <div className="right__container">
        <GreetDate />
        <AddTask categoryList={categoryList} createTask={createTask} />
        <TaskList
          deleteTask={deleteTask}
          changeCompletion={changeCompletion}
          taskList={taskList}
          category={category}
        />
      </div>
    </div>
  );
}

export default App;
