import Task from "../Task";
import "./taskList.css";

function TaskList({ taskList, category, changeCompletion, deleteTask }) {
  const handleShowList = taskList.map((task) => {
    if (category === "Completed" && task.completion) {
      return (
        <Task
          deleteTask={deleteTask}
          key={task.id}
          task={task}
          changeCompletion={changeCompletion}
        />
      );
    } else if (task.category === category && !task.completion) {
      return (
        <Task
          deleteTask={deleteTask}
          key={task.id}
          task={task}
          changeCompletion={changeCompletion}
        />
      );
    } else if (!category) {
      return (
        <Task
          key={task.id}
          deleteTask={deleteTask}
          task={task}
          changeCompletion={changeCompletion}
        />
      );
    }
  });

  return <div className="tasklist">{handleShowList}</div>;
}

export default TaskList;
