import React from 'react'
import styles from './commentbox.module.css'

const Commentbox = () => {
  return (
    <div className={styles.container} >
        <input  className={styles.commentarea}  type="text" placeholder='Write a Comment...' maxLength={75}/>
        <button  className={styles.button}>Comment</button>
    </div>
  )
}

export default Commentbox