import Task from "../Task";
import "./taskList.css";
import UseTaskContext from "../../hooks/use-task-context";

function TaskList({}) {
  const { taskList, deleteTask, changeCompletion, categoryList, category } = UseTaskContext();

  
  const handleShowList = taskList.map((task) => {
  
   
    
    if (category.value === "completed" && task.completion) {
      return (
        <Task
          deleteTask={deleteTask}
          key={task.id}
          task={task}
          changeCompletion={changeCompletion}
          categoryList={categoryList}

        />
      );
    } else if (task.category === category.label && !task.completion) {
      return (
        <Task
          deleteTask={deleteTask}
          key={task.id}
          task={task}
          changeCompletion={changeCompletion}
          categoryList={categoryList}

 
        />
      );
    } 
    else if (!category.value && !task.completion) {
      return (
        <Task
          key={task.id}
          deleteTask={deleteTask}
          task={task}
          changeCompletion={changeCompletion}
          categoryList={categoryList}

        />
      );
    }
  });

  return <div className="tasklist">{handleShowList}</div>;
}

export default TaskList;
