import React, { FC } from 'react'
import styles from './Grid.module.scss';

const Grid: FC = (props) => {
  return (
    <div className={styles['grid-container']}>
      {props.children}
    </div>
  )
}

export default Grid
