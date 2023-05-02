import { useEffect } from "react";
import Menu from "./components/menu/Menu";
import TaskList from "./components/taskList/TaskList";
import AddTask from "./components/addTask/AddTask";
import GreetDate from "./components/GreetDate";
import { useContext} from 'react';
import Context from './components/context/ContextComponent';


function App() {

  const { fetchTasks, createTask, taskList, deleteTask, changeCompletion, showCategory, createCategory, categoryList, category, fetchCategories, deleteCategory } = useContext(Context)


  useEffect(() => {
    fetchTasks();
    fetchCategories()
    showCategory('', 1)

  }, []);
 

  return (
    <div className="container main__container">
      <Menu
        taskList={taskList}
        categoryList={categoryList}
        createCategory={createCategory}
        showCategory={showCategory}
        deleteCategory={deleteCategory}
      />
      <div className="right__container">
        <GreetDate />
        <AddTask category={category} categoryList={categoryList} createTask={createTask} />
        <TaskList
          deleteTask={deleteTask}
          changeCompletion={changeCompletion}
          taskList={taskList}
          category={category}
          categoryList={categoryList}
        />
      </div>
    </div>
  );
}

export default App;
