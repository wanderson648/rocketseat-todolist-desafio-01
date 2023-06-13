import { Trash, Plus } from 'phosphor-react'

import logoImg from './assets/Logo.svg'
import styles from './styles/App.module.scss'
import './global.module.scss'



export function App() {
  

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logoImg} alt="Logo do App" />
      </header>

      <main className={styles.main}>

        <div className={styles.form}>
          <input type="text"
            placeholder='Adicione uma nova tarefa'
          />
          <button type='button'>
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

          <div className={styles.taskcard}>
            <input type="checkbox" />
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <Trash size={22} />
          </div>
        </div>

      </main>
    </div>
  )
}

