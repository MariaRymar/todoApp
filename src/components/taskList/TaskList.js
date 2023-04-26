import Task from "../Task";
import "./taskList.css";

function TaskList({
  taskList,
  category,
  changeCompletion,
  deleteTask
}) {
  return (
    <div>
      {category ? (
        <div className="tasklist">
          {taskList.map((task) => {
            return task.category === category ? (
              <Task
              deleteTask={deleteTask}
                key={task.id}
                task={task}
                changeCompletion={changeCompletion}
              />
            ) : (
              <div key={task.id}></div>
            );
          })}
        </div>
      ) : (
        <div className="tasklist">
          {taskList.map((task) => (
            <Task
              key={task.id}
              deleteTask={deleteTask}
              task={task}
              changeCompletion={changeCompletion}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;
