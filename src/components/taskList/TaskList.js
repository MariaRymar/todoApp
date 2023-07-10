// import Task from "../taskDetail/Task";
import "./taskList.css";
// import UseTaskContext from "../../hooks/use-task-context";
import { useDispatch, useSelector } from "react-redux";;

function TaskList() {
  // const { taskList, deleteTask, changeCompletion, categoryList, category } =
  //   UseTaskContext();
  const taskList = useSelector((state) => {
    return state.tasks.taskList

  })

  console.log(taskList)
  console.log('sksks')



  // const handleShowList = taskList
  //   .sort((a, b) => a.date - b.date)
  //   .map((task) => {
  //     if (category.value === "completed" && task.completion) {
  //       return (
  //         <Task
  //           deleteTask={deleteTask}
  //           key={task.id}
  //           task={task}
  //           changeCompletion={changeCompletion}
  //           categoryList={categoryList}
  //         />
  //       );
  //     } else if (task.category === category.label && !task.completion) {
  //       return (
  //         <Task
  //           deleteTask={deleteTask}
  //           key={task.id}
  //           task={task}
  //           changeCompletion={changeCompletion}
  //           categoryList={categoryList}
  //         />
  //       );
  //     } else if (!category.value && !task.completion) {
  //       return (
  //         <Task
  //           key={task.id}
  //           deleteTask={deleteTask}
  //           task={task}
  //           changeCompletion={changeCompletion}
  //           categoryList={categoryList}
  //         />
  //       );
  //     }
  //   });
  const showList = taskList.map(task => <div key={task.id}>{task.name}</div>)

  // return <div className="tasklist">{handleShowList}</div>;
  return <div className="tasklist">{showList}</div>;

}

export default TaskList;
