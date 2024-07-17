const ToDoItem = ({ task, index, editTask, removeTask, toggleCompletion }) => {
  return (
    <li className={`task ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleCompletion(index)}>{task.text}</span>
      <button onClick={() => editTask(index)}>Edit</button>
      <button onClick={() => removeTask(index)}>Remove</button>
    </li>
  );
};

export default ToDoItem;
