import styles from "./TaskInfo.module.css";

interface ITaskInfo {
  tasks: number;
  completedTasks: number;
}

export function TaskInfo({ tasks, completedTasks }: ITaskInfo) {
  return (
    <header>
      <div className={styles.info}>
        <div className={styles.createdTasks}>
          <h2>Tarefas criadas</h2>

          <div className={styles.count}>{tasks}</div>
        </div>

        <div className={styles.completed}>
          <h2>Concluídas</h2>

          <div className={styles.count}>
            {completedTasks} de {tasks}
          </div>
        </div>
      </div>
    </header>
  );
}
