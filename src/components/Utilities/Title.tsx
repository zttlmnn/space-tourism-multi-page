import React, { FC } from 'react'

import styles from './Title.module.scss';

const Title: FC<{ index: string; title: string}> = (props) => {
  return (
    <section className={styles.title}>
            <span>{props.index}</span>
            <h2>{props.title}</h2>
    </section>
  )
}

export default Title

