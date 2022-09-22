import { Header } from './components/Header'
import { Task } from './components/Task'
import { TaskInfo } from './components/TaskInfo';
import { FaPlusCircle, FaClipboard } from 'react-icons/fa'
import { FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css'
import './global.css'

interface ITaskList {
  content: string;
  isCompleted: boolean;
  id: string;
}

export function App() {
  const [tasks, setTasks] = useState<ITaskList[]>([]);
  const [newTask, setNewTask] = useState('');

  const canSubmit = newTask.length === 0;
  const numberOfTasks = tasks.length;
  const numberOfCompletedTasks = tasks.filter(task => task.isCompleted).length
  const containTasks = numberOfTasks === 0;

  function handleAddTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks,
    {
      content: newTask,
      isCompleted: false,
      id: uuidv4()
    }
    ])

    setNewTask("")
  }

  function handleDeleteTask(taskToDelete: string) {
    const taskstWithOutDelete = tasks.filter((task) => {
      return task.id != taskToDelete;
    });

    setTasks(taskstWithOutDelete);
  }

  function handleCompletedTask(taskId: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    })
    
    setTasks(newTasks)
  }

  return (
    <div className={styles.app}>
      <Header />

      <div className={styles.newTaskField}>
        <form onSubmit={handleAddTask}>
          <input
            type="search"
            placeholder="Adicione uma nova tarefa"
            maxLength={220}
            onChange={event => setNewTask(event.target.value)}
            value={newTask}
          />

          <button type="submit" disabled={canSubmit}>
            Criar
            <FaPlusCircle size={15} />

          </button>
        </form>

      </div>

      <div className={styles.tasksContainer}>
        <TaskInfo
          tasks={numberOfTasks}
          completedTasks={numberOfCompletedTasks}
        />

        <div className={containTasks ? styles.emptyTaskContainer : styles.emptyTaskContainerDisabled}>
          <FaClipboard size={50} />

          <h3>
            <span>Você ainda não tem tarefas cadastradas</span> Crie tarefas e organize seus itens a fazer
          </h3>

        </div>

        <div className={styles.tasks}>
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                content={task.content}
                isCompleted={task.isCompleted}
                onDeleteTask={handleDeleteTask}
                onCompletedTask={handleCompletedTask}
              />
            )
          })}
        </div>

      </div>

    </div>
  )
}