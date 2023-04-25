import { useState, useEffect } from "react";
import Menu from "./components/Menu";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {
  const [categoryList, setCategoryList] = useState([{id:'hm', value: 'Home'}, {id: 'wk', value: 'Work'}])
  const [category, setCategory] = useState('')
  const [taskList, setNewTaskList] = useState([
    {
      id: "d34",
      value: "Buy milk",
      dueDate: "18 Mar",
      completion: false,
      category: "Home"
    },
    {
      id: "d54",
      value: "Go to the gym",
      dueDate: "13 Mar",
      completion: false,
      category: "Home"

    },
    {
      id: "d44",
      value: "Schedule a meeting",
      dueDate: "1 Mar",
      completion: true,
      category: "Work"
    },
  ])

  const createTask = (task) => {

    setNewTaskList([...taskList, {
      id: Math.random(),
      value: task.value,
      dueDate: task.dueDate,
      completion: false,
      category: task.category

    }])

  }

  const showCategory = (category) => {
    setCategory(category)
  };

  const createCategory = (newCategory) => {
    console.log(newCategory)
    setCategoryList([...categoryList, {id: Math.random(), value: newCategory}])
  }

  return (
    <div>
      <Menu categoryList={categoryList} createCategory={createCategory} showCategory={showCategory} />

      <div>
        <h1>Good Morning</h1>
        <h2>It's Wednesday, Feb 23</h2>
        <TaskList taskList={taskList} category={category} />
        
       <AddTask categoryList={categoryList} createTask={createTask} />
      </div>
    </div>
  );
}

export default App;
