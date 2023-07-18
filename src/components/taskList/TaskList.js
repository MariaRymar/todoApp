import Task from "../taskDetail/Task";
import "./taskList.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../store";

function TaskList() {
  const dispatch = useDispatch();
  // const { taskList } = useSelector(
  //   ({ tasks: { taskList, searchTerm, chosenCategory } }) => {
  //     if (chosenCategory) {
  //       const filteredTasks = taskList
  //         .filter(
  //           (task) =>
  //             !task.completion &&
  //             task.category.toLowerCase() === chosenCategory.toLowerCase()
  //         )
  //         .filter((task) =>{
  //           console.log(task.value)
  //           console.log(searchTerm)
  //          return task.value.toLowerCase().includes(searchTerm.toLowerCase())
  //         }
  //         );
  //       return { taskList: filteredTasks };
  //     } else return {taskList}
  //   }
  // );

  const { taskList } = useSelector(
    ({ tasks: { taskList, searchTerm, chosenCategory } }) => {
  
      const filteredTasks = taskList.filter((task) => {
        if (chosenCategory) {
          return (
            !task.completion &&
            task.category.toLowerCase() === chosenCategory.toLowerCase() &&
            task.value.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }
        return task.value.toLowerCase().includes(searchTerm.toLowerCase());
      });

      return { taskList: filteredTasks };
    }
  );

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);



  const showList = taskList
    .sort((a, b) => a.date - b.date)
    .map((task) => <Task key={task.id} task={task} />);

  return <div className="tasklist">{showList}</div>;
}

export default TaskList;
