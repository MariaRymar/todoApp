

function Task({task}) {
    const handleCompletionChange = () => {

    }
    return <div>
        {task.value}
        {task.dueDate}
        {task.category}
        <input type='checkbox' checked={task.completion} onChange={handleCompletionChange}></input>

    </div>

}
export default Task;