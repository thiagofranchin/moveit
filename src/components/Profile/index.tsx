import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import styles from './Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/thiagofranchin.png" alt="Thiago Franchin"/>
      <div>
          <strong>Thiago Franchin</strong>
          <p>
            <img src="icons/level.svg" alt="level" />
            Level {level}
          </p>
      </div>
    </div>
  )
}
