import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="tasksList">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`tasksList__item
        ${task.done && hideDone ? " js-tasksList__item--hidden" : ""}`}
      >
        <button 
        className="tasksList__button tasksList__button--toggleDone"
        onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✓" : ""}
        </button>
        <span className={`${task.done ? "js-item--done" : ""}`}>
          {task.content}
        </span>
        <button 
        className="tasksList__button tasksList__button--remove"
        onClick={() => removeTask(task.id)}>
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
