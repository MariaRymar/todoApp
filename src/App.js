import Menu from "./components/menu/Menu";
import AddTask from "./components/addTask/AddTask";
import TaskList from "./components/taskList/TaskList";
import GreetDate from "./components/GreetDate";
import SearchBar from "./components/searchBar/SearchBar";
import Route from "./components/routing/Route";
import MenuBar from "./components/menu/MenuBar";
import CalendarView from "./components/calendar/Calendar";
function App() {
  return (
    <div className="container main__container">
      <Menu />
      <Route path="/">
        <div className="right__container">
          <div className='container-lg'>
            <SearchBar />
            <GreetDate />
            <AddTask />
            <TaskList />
          </div>
          <MenuBar />
        </div>
      </Route>
      <Route path="/calendar">
        <CalendarView />
      </Route>
    </div>
  );
}

export default App;
