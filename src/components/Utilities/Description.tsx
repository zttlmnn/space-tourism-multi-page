import React, { FC } from 'react';
import styles from './Description.module.scss';

const Description: FC<{text: string}> = (props) => {
  return (
    <p className={styles.text}>{props.text}</p>
  )
}

export default Description;
