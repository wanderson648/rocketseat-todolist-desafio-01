
import { ChangeEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import { TaskType } from '../@types/TaskType'
import { v4 as uuid } from 'uuid'


import styles from './Form.module.scss'

interface FormProps {
  onAddNewTask: (task: TaskType) => void
}

export function Form( { onAddNewTask }: FormProps) {
  const [taskName, setTaskName] = useState('')

  function handleInputTask(event: ChangeEvent<HTMLInputElement>) {
    setTaskName(event.target.value)
  }

  function handleAddTaskName() {
    if (!!taskName) {
      
      const newTask = {
        id: uuid(),
        title: taskName,
        isCompleted: false
      }

      onAddNewTask(newTask)
      setTaskName('')
    }
  }

  const isTaskEmpty = taskName.length === 0

  return (
    <form  className={styles.form}>
      <input
        type="text"
        value={taskName}
        placeholder='Adicione uma nova tarefa'
        onChange={handleInputTask}
      />
      <button
        type='button'
        disabled={isTaskEmpty}
        onClick={handleAddTaskName}
      >
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  )


}