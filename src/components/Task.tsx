import styles from "./Task.module.css";
import { Trash } from "phosphor-react";

interface ITask {
  id: string;
  content: string;
  isCompleted: boolean;
  onDeleteTask: (content: string) => void;
  onCompletedTask: (content: string) => void;
}

export function Task({
  id,
  content,
  isCompleted,
  onDeleteTask,
  onCompletedTask,
}: ITask) {
  function handleDeleteComment() {
    onDeleteTask(id);
  }

  function handleCompleteTask() {
    onCompletedTask(id);
  }

  return (
    <div className={styles.card}>
      <input
        className={styles.checkbox}
        id={id}
        type="checkbox"
        name="radio"
        onChange={handleCompleteTask}
      />

      <label htmlFor={id}>
        <p className={isCompleted ? styles.taskCompleted : styles.taskContent}>
          {content}
        </p>
      </label>

      <button className={styles.deleteButton} onClick={handleDeleteComment}>
        <Trash size={20} className={styles.trash} />
      </button>
    </div>
  );
}
