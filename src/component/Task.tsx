import { Trash } from 'phosphor-react'

import styles from './Task.module.scss'

interface TaskProps {
  task: string
  onDeleteTask: (task: string) => void
}

export function Task({ task, onDeleteTask }: TaskProps) {

  function handleDeleteTask () {
    onDeleteTask(task)
  }

  return (
    <div className={styles.taskcard}>
      <input type="checkbox" />
      <p>{task}</p>
      <Trash 
        size={22} 
        onClick={handleDeleteTask}
      />
    </div>
  )
}