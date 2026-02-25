import DueBadge from "./DueBadge";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task">
      <label className="taskMain">
        <input type="checkbox" />
      </label>

      <button className="ghost" aria-label="Delete task">
        ✕
      </button>
    </li>
  );
}