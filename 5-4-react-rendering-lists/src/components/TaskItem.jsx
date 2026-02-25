import DueBadge from "./DueBadge";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task">
      <label className="taskMain">
        <input type="checkbox" />

        {!task.isDone && <DueBadge dueDate={task.dueDate} />}

        <span className={`title ${task.isDone ? "done" : ""}`}>{task.title}</span>
      </label>

      <button className="ghost" aria-label="Delete task">
        ✕
      </button>
    </li>
  );
}