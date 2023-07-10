// import { useEffect } from "react";
// import Menu from "./components/menu/Menu";
import TaskList from "./components/taskList/TaskList";
// import AddTask from "./components/addTask/AddTask";
// import GreetDate from "./components/GreetDate";
// import SearchBar from "./components/searchBar/SearchBar";
// import UseTaskContext from "./hooks/use-task-context";
// import Route from "./components/routing/Route";
// import CalenadarPage from "./pages/CalendarPage";

function App() {
  // const { fetchTasks, showCategory, fetchCategories } = UseTaskContext();

  // useEffect(() => {
  //   fetchTasks();
  //   fetchCategories();
  //   showCategory("", 1);
  // }, []);

  return (
    // <div className="container main__container">
      <TaskList />
      // {/* <Menu />
      // <Route path="/">
      //   <div className="right__container">
      //     <SearchBar />
      //     <GreetDate />
      //     <AddTask />
      //     <TaskList />
      //   </div>
      // </Route>
      // <Route path="/calendar">
      //   <CalenadarPage />
      // </Route> */}
    // </div>
  );
}

export default App;
