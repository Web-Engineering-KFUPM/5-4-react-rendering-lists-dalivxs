import TaskItem from "./TaskItem";

export default function CourseCard({ course, index, onMutateCourse }) {
  function toggleTask(id) {
    // Task 4
  }

  function deleteTask(id) {
    // Task 4
  }

  return (
    <article className="course card">
      <header className="cardHeader">
        <h2>{course.title}</h2>
      </header>

      <section className="tasksSection">
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