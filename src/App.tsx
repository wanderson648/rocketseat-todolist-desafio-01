import { Plus } from 'phosphor-react'
import { useState, ChangeEvent } from 'react'
import logoImg from './assets/Logo.svg'
import styles from './styles/App.module.scss'
import './global.module.scss'
import { Task } from './component/Task'



export function App() {
  const [tasks, setTasks] = useState<string[]>(['Fazer café'])
  const [newTask, setNewTask] = useState<string>('')

  function handleInputTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  function handleAddTask() {
    setTasks([...tasks, newTask])
    setNewTask('')
  }

  function deleteTask(taskToDelete: string) {
    const taskWithoutDeleteOne = tasks.filter(task => task !== taskToDelete)
    setTasks(taskWithoutDeleteOne)
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logoImg} alt="Logo do App" />
      </header>

      <main className={styles.main}>

        <div className={styles.form}>
          <input
            type="text"
            value={newTask}
            placeholder='Adicione uma nova tarefa'
            onChange={handleInputTask}
          />
          <button
            type='button'
            onClick={handleAddTask}
          >
            Criar
            <Plus size={18} />
          </button>
        </div>

        <div className={styles.taskcontaner}>
          <div className={styles.taskstatus}>
            <div className={styles.created}>
              Tarefas criadas <span>5</span>
            </div>
            <div className={styles.done}>
              Concluídas <span>2 de 5</span>
            </div>
          </div>


          {tasks.map((task, index) => (
            <Task 
              key={index}
              task={task}
              onDeleteTask={deleteTask} 
            />
          ))}

        </div>
      </main>
    </div>
  )
}

