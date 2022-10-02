import { useContext } from "react";
import { TaskContext } from "../../pages/Home";
import {
  Count,
  TaskInfoContainer,
  TasksCompleted,
  TasksCreated,
} from "./styles";

export function TaskInfo() {
  const { tasks } = useContext(TaskContext);

  const numberOfTasks = tasks.length;
  const numberOfCompletedTasks = tasks.filter(
    (task) => task.isCompleted
  ).length;

  return (
    <TaskInfoContainer>
      <TasksCreated>
        <h2>Tarefas criadas</h2>

        <Count>{numberOfTasks}</Count>
      </TasksCreated>

      <TasksCompleted>
        <h2>Concluídas</h2>

        <Count>
          {numberOfCompletedTasks} de {numberOfTasks}
        </Count>
      </TasksCompleted>
    </TaskInfoContainer>
  );
}
