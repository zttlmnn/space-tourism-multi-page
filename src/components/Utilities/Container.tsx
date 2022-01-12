import React, { FC } from 'react'
import styles from './Container.module.scss';

const Container: FC<{ className?: string}>  = (props) => {
  const cssStyle = [
    styles['background-container'],
    props.className
  ];

  return (
    <div className={cssStyle.join(' ')}>
      {props.children}
    </div>
  )
}

export default Container
