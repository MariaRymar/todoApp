import Task from "../taskDetail/Task";
import "./taskList.css";
import { useEffect } from "react";
// import UseTaskContext from "../../hooks/use-task-context";
import { useDispatch, useSelector } from "react-redux";
import {fetchTasks} from '../../store'

function TaskList() {
  // const { taskList, deleteTask, changeCompletion, categoryList, category } =
  //   UseTaskContext();
  const dispatch = useDispatch();
  const {taskList, chosenCategory} = useSelector(({tasks: {taskList, searchTerm, chosenCategory}}) => {
    
    const filteredTasks = taskList.filter(task => !task.completion && task.category.toLowerCase() === chosenCategory).filter(task => task.value.toLowerCase().includes(searchTerm.toLowerCase()))
    return {taskList: filteredTasks}
  })

  console.log(taskList)

useEffect(() => {
  dispatch(fetchTasks())
},[dispatch])


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

  const showList = taskList.sort((a, b) => a.date - b.date).map(task => <Task key={task.id} task={task} />)

  return <div className="tasklist">{showList}</div>;

}

export default TaskList;
