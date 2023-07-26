import Task from "../taskDetail/Task";
import "./taskList.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../store";
import Skeleton from "../Skeleton";

function TaskList() {
  const dispatch = useDispatch();
  const [isLoadingTasks, setIsLoadingTasks] = useState(false);
  const [loadingTasksError, setLoadingTasksError] = useState(null);

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
    setIsLoadingTasks(true);
    dispatch(fetchTasks())
      .unwrap()
      .catch((e) => setLoadingTasksError(e))
      .finally(() => setIsLoadingTasks(false));
  }, [dispatch]);

  let content;
  if (isLoadingTasks) {
    content = <Skeleton times={5} />;
  } else if (loadingTasksError) {
    content = <div>Error fetching tasks</div>;
  } else {
    content = taskList
      .sort((a, b) => a.date - b.date)
      .map((task) => <Task key={task.id} task={task} />);
  }

  return <div className="tasklist">{content}</div>;
}

export default TaskList;
