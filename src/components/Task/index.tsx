import { Trash } from "phosphor-react";
import { TaskContext } from "../../pages/Home";
import { useContext } from "react";
import {
  TaskContainer,
  TaskDeleteButton,
  TaskDescription,
  TaskDescriptionContainer,
  TaskInput,
  TasksDescriptionCompleted,
} from "./styles";

interface TaskProps {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function Task({ id, content, isCompleted }: TaskProps) {
  const { handleDeleteTask, handleCompletedTask } = useContext(TaskContext);

  function handleDeleteComment() {
    handleDeleteTask(id);
  }

  function handleCompleteTask() {
    handleCompletedTask(id);
  }

  return (
    <TaskContainer>
      <TaskInput
        id={id}
        type="checkbox"
        name="radio"
        onChange={handleCompleteTask}
      />

      <TaskDescriptionContainer htmlFor={id}>
        {isCompleted ? (
          <TasksDescriptionCompleted>{content}</TasksDescriptionCompleted>
        ) : (
          <TaskDescription>{content}</TaskDescription>
        )}
      </TaskDescriptionContainer>

      <TaskDeleteButton onClick={handleDeleteComment}>
        <Trash size={20} />
      </TaskDeleteButton>
    </TaskContainer>
  );
}
