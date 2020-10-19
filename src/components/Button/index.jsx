import React from 'react'
import styles from './index.scss'
function Button(props) {
  return (
    <div className={`${styles.button} ${props.className}`} onClick={props.onClick}>
      {props.children}
    </div>
  )
}
export default Button

