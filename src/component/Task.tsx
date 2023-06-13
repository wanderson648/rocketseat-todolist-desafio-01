import { Trash } from 'phosphor-react'

import styles from './Task.module.scss'
import { TaskType } from '../@types/TaskType'


interface TaskProps {
  task: TaskType
  onDeleteTask: (task: string) => void
  onChangeCompletedTask: (taskId: string) => void
}


export function Task({ task, onDeleteTask, onChangeCompletedTask }: TaskProps) {


  function handleDeleteTask() {
    onDeleteTask(task.id)
  }

  function handleCompletedTask() {
    onChangeCompletedTask(task.id)
  }

  return (
    <div className={`${styles.taskcard} ${task.isCompleted ? styles.completed : ''}`}>
      <div>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={handleCompletedTask}
        />
        <p>{task.title}</p>
      </div>
      <Trash
        size={22}
        onClick={handleDeleteTask}
      />
    </div>
  )
}