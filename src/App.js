import Menu from "./components/menu/Menu";
import AddTask from "./components/addTask/AddTask";
import TaskList from "./components/taskList/TaskList";
import GreetDate from "./components/GreetDate";
import SearchBar from "./components/searchBar/SearchBar";
import Route from "./components/routing/Route";
import CalendarView from "./components/calendar/Calendar";

function App() {
  return (
    <div className="container main__container">
      <Menu />
      <Route path="/">
        <div className="right__container">
          <SearchBar />
          <GreetDate />
          <AddTask />
          <TaskList />
        </div>
      </Route>
      <Route path="/calendar">
        <CalendarView />
      </Route>
    </div>
  );
}

export default App;
