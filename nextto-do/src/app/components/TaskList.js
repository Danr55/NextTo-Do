import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem 
          key={index} 
          task={task} 
          toggleComplete={() => toggleComplete(index)} 
          deleteTask={() => deleteTask(index)} 
        />
      ))}
    </div>
  );
};

export default TaskList;