import TaskItem from "./TaskItem";

export default function CourseCard({ course, index, onMutateCourse }) {
  function toggleTask(id) {
    onMutateCourse(index, (tasks) =>
      tasks.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    );
  }

  function deleteTask(id) {
    onMutateCourse(index, (tasks) => tasks.filter((t) => t.id !== id));
  }

  const hasTasks = course.tasks.length > 0;
  const allDone = hasTasks && course.tasks.every((t) => t.isDone);

  return (
    <article className="course card">
      <header className="cardHeader">
        <h2>{course.title}</h2>

        {allDone && <span className="chip good">All caught up</span>}
      </header>

      <section className="tasksSection">
        {course.tasks.length === 0 && <p className="empty">No tasks yet.</p>}

        <ul className="tasks">
          {course.tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      </section>
    </article>
  );
}