import Task from "../taskDetail/Task";
import "./taskList.css";
import Skeleton from "../Skeleton";
import UseTaskContext from "../../hooks/use-task-context";

function TaskList() {
  const { isLoadingTasks, loadingTasksError, taskList } = UseTaskContext();

  let content;
  if (isLoadingTasks) {
    content = <Skeleton times={5} />;
  } else if (loadingTasksError) {
    content = <div>Error fetching tasks</div>;
  } else {
    content = taskList
      .sort((a, b) => {
        if (a.completion && !b.completion) return 1;
        if (!a.completion && b.completion) return -1;
        return a.date - b.date;
      })
      .map((task) => <Task key={task.id} task={task} />);
  }

  return <div className="tasklist">{content}</div>;
}

export default TaskList;
