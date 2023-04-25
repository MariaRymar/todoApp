import Task from "./Task";

function TaskList({ taskList, category }) {
  return (
    <div>
      {category ? (
        <div>
          {taskList.map((task) => {
            return task.category === category ? (
              <Task key={task.id} task={task} />
            ) : (
              <div key={task.id}></div>
            );
          })}
        </div>
      ) : (
        <div>
          {taskList.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;
