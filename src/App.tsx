import { useState, useEffect } from 'react'
import { Task } from './component/Task'
import { Form } from './component/Form'
import { TaskType } from './@types/TaskType'


import logoImg from './assets/Logo.svg'
import emptyImg from './assets/clipboard.svg'
import styles from './styles/App.module.scss'

import './global.scss'


const LOCALSTORAGE_TASKS_KEY = 'todolist_tasks'

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [isLoading, setIsLoanding] = useState(true)


  useEffect(() => {
    if(!isLoading) {
      localStorage.setItem(LOCALSTORAGE_TASKS_KEY, JSON.stringify(tasks))
    }
  }, [tasks])

  useEffect(() => {
    const taskLocal = localStorage.getItem(LOCALSTORAGE_TASKS_KEY)
    
    if(taskLocal !== null) {
      const task = JSON.parse(taskLocal)
      setTasks(task)
      setIsLoanding(false)
    } 
  }, [])

  function deleteTask(taskId: string) {
    const taskWithoutDeleteOne = tasks.filter(task => {
      return task.id !== taskId
    })
    setTasks(taskWithoutDeleteOne)
  }

  function addTask(newTask: TaskType) {
    setTasks([...tasks, newTask])
  }

  function onChangeCompleted(taskId: string) {
    const task = tasks.findIndex(task => task.id === taskId)

    const updateTask = [...tasks]
    updateTask[task].isCompleted = !updateTask[task].isCompleted
    setTasks(updateTask)
  }


  const totalTasks = tasks.length
  useEffect(() => {
    totalTasks
  }, [tasks])


  const totalCompletedTasks = tasks.filter(task => task.isCompleted).length
  useEffect(() => {
    totalCompletedTasks
  }, [tasks])



  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logoImg} alt="Logo do App" />
      </header>

      <main className={styles.main}>

        <Form onAddNewTask={addTask} />

        <div className={styles.taskcontaner}>
          <div className={styles.taskstatus}>
            <div className={styles.created}>
              Tarefas criadas <span>{totalTasks}</span>
            </div>
            <div className={styles.done}>
              Concluídas <span>{`${totalCompletedTasks} de ${totalTasks}`}</span>
            </div>
          </div>


          {tasks.length === 0 && (
            <div className={styles.empty_task}>
              <img src={emptyImg} alt="" />
              <p>
                <span>Você ainda não tem tarefas cadastradas</span><br />
                <span>Crie tarefas e organize seus itens a fazer</span>
              </p>
            </div>
          )}

          {
            tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onDeleteTask={deleteTask}
                onChangeCompletedTask={onChangeCompleted}
              />
            ))
          }
        </div>
      </main>
    </div>
  )
}

