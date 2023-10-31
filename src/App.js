import Menu from "./components/menu/Menu";
import AddTask from "./components/addTask/AddTask";
import TaskList from "./components/taskList/TaskList";
import GreetDate from "./components/GreetDate";
import SearchBar from "./components/searchBar/SearchBar";
import Route from "./components/routing/Route";
import MenuBar from "./components/menu/MenuBar";
import CalendarView from "./components/calendar/Calendar";
import { useState } from "react";



function App() {
  const [tasksForToday, setTasksForToday] = useState(false);

  return (
    <div className="container main__container">
      <Menu />
      <Route path="/">
        <div className="right__container">
          <div className="container-lg">
            <div>
              <SearchBar />
              <div className="today">
                <button
                  className={`${
                    tasksForToday ? "btn-today clicked" : "btn-today"
                  }`}
                  onClick={() => setTasksForToday(!tasksForToday)}
                >
                  {tasksForToday ? "All Tasks" : "Today's Tasks"}{" "}
                </button>
              </div>
            </div>
            <GreetDate />
            <AddTask />
            <MenuBar />

            <TaskList tasksForToday={tasksForToday} />
            <div className="sm-add-task">
              <button>+</button>
            </div>
          </div>
        </div>
      </Route>
      <Route path="/calendar">
        <CalendarView />
      </Route>
    </div>
  );
}

export default App;
