import { FC, useState } from 'react'
import { CrewData } from '../models/data-model';
import styles from './CrewView.module.scss';

const CrewView: FC<{crewData: CrewData[]}> = props => {
  const [crew, setCrew] = useState<number>(0)


  const crewChangeHandler = (crew: number) => {
    setCrew(crew)
  }

  const cssBtnStyle = [styles['crew-view__btn'], styles['crew-view__btn--active']]


  return (

    <div className={styles['crew-view']}>
      <div className={styles['crew-view__intro']}>
      <span>02</span>
      <h2>Meet your crew</h2>
      </div>
      <div className={styles['crew-view__img']}>
        <img 
        src={`${process.env.PUBLIC_URL}../../${props.crewData[crew].images.png}`}
        //src="../../assets/crew/image-moon.png"
        alt="" />
      </div>
      <div className={styles['crew-view__btns']}>
        <button onClick={crewChangeHandler.bind(null, 0)} className={crew === 0 ? cssBtnStyle.join(' ') : cssBtnStyle[0]} />
        <button onClick={crewChangeHandler.bind(null, 1)} className={crew === 1 ? cssBtnStyle.join(' ') : cssBtnStyle[0]} />
        <button onClick={crewChangeHandler.bind(null, 2)} className={crew === 2 ? cssBtnStyle.join(' ') : cssBtnStyle[0]} />
        <button onClick={crewChangeHandler.bind(null, 3)} className={crew === 3 ? cssBtnStyle.join(' ') : cssBtnStyle[0]} />
      </div>
      <div className={styles['crew-view__info']}>
        <h3>{props.crewData[crew].role}</h3>
        <h1>{props.crewData[crew].name}</h1>
        <p>{props.crewData[crew].bio}</p>
      </div>
      </div>
      )
}

export default CrewView;
