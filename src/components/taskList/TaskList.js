import Task from "../taskDetail/Task";
import "./taskList.css";
import Skeleton from "../Skeleton";
import UseTaskContext from "../../hooks/use-task-context";

function TaskList({tasksForToday}) {
  const { isLoadingTasks, loadingTasksError, taskList, chosenCategory, searchTerm } = UseTaskContext();
  let content;
  if (isLoadingTasks) {
    content = <Skeleton times={5} />;
  } else if (loadingTasksError) {
    content = <div>Error fetching tasks</div>;
  } else {
    content = !tasksForToday? taskList
      .sort((a, b) => {
        if (a.completion && !b.completion) return 1;
        if (!a.completion && b.completion) return -1;
        return a.date - b.date;
      })
      .map((task) => <Task key={task.id} task={task} />) : taskList.filter(task => new Date(task.date).toLocaleDateString() === new Date().toLocaleDateString()).map((task) => <Task key={task.id} tasksForToday={tasksForToday} task={task} />);
  }

 

  return <div className="tasklist">{content.length < 1 && !chosenCategory && !searchTerm ? <h2 className='empty'>You have a free day</h2> : content}</div>;
}

export default TaskList;
