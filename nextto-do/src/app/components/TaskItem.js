const TaskItem = ({ task, toggleComplete, deleteTask }) => {
    return (
      <div>
        <input type="checkbox" onChange={toggleComplete} checked={task.completed} />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.title}
        </span>
        <button onClick={deleteTask}>Delete</button>
      </div>
    );
  };
  
  export default TaskItem;