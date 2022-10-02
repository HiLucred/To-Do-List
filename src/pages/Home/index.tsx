import { createContext, useState } from "react";
import { Header } from "../../components/Header";
import { FormProvider, useForm } from "react-hook-form";
import { TaskInfo } from "../../components/Task-Info";
import { Task } from "../../components/Task";
import { v4 as uuid } from "uuid";
import { FaClipboard } from "react-icons/fa";
import { TaskEmptyBox } from "../../components/Task/styles";

interface TaskList {
  content: string;
  isCompleted: boolean;
  id: string;
}

export interface NewTaskFormData {
  task: string;
}

interface TaskContextType {
  tasks: TaskList[];
  newTask: string;
  handleAddTask: (data: NewTaskFormData) => void;
  handleDeleteTask: (taskToDelete: string) => void;
  handleCompletedTask: (taskId: string) => void;
}

export const TaskContext = createContext({} as TaskContextType);

export function Home() {
  const [tasks, setTasks] = useState<TaskList[]>([]);
  const [newTask, setNewTask] = useState("");

  const newTaskForm = useForm<NewTaskFormData>();
  const { reset } = newTaskForm;

  const containTasks = tasks.length === 0;

  function handleAddTask(data: NewTaskFormData) {
    setTasks([
      ...tasks,
      {
        content: data.task,
        isCompleted: false,
        id: uuid(),
      },
    ]);

    setNewTask("");

    reset();
  }

  function handleDeleteTask(taskToDelete: string) {
    const taskstWithOutDelete = tasks.filter((task) => {
      return task.id != taskToDelete;
    });

    setTasks(taskstWithOutDelete);
  }

  function handleCompletedTask(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    setTasks(newTasks);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        newTask,
        handleAddTask,
        handleDeleteTask,
        handleCompletedTask,
      }}
    >
      <FormProvider {...newTaskForm}>
        <Header />
      </FormProvider>

      <TaskInfo />

      {containTasks && (
        <TaskEmptyBox>
          <FaClipboard size={50} />
          <p>
            <span>Você ainda não tem tarefas cadastradas</span> Crie tarefas e
            organize seus itens a fazer
          </p>
        </TaskEmptyBox>
      )}

      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            content={task.content}
            isCompleted={task.isCompleted}
          />
        );
      })}
    </TaskContext.Provider>
  );
}
