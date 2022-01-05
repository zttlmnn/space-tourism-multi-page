import { FC, useState } from 'react'
import { DestinationsData } from '../models/data-model';
import styles from './DestinationView.module.scss';



const DestinationView: FC<{destinationsData: DestinationsData[]}> = props => {
  const [destination, setDestination] = useState<number>(0)


  /* const [obj] = props.destinationsData!; */

  //console.log(obj.destinations.filter((item) => item.name === 'Moon'));
/*   console.log(obj); */


console.log(props.destinationsData[0].images);

const destinationHandler = (destination: number) => {
  setDestination(destination)
}

const cssBtnStyle = [styles['destination-view__btn'], styles['destination-view__btn--active']]

console.log(destination);

  return (
    <div className={styles['destination-view']}>
      <div className={styles['destination-view__intro']}>
      <span>01</span>
      <h2>Pick your destination</h2>
      </div>
      <div className={styles['destination-view__img']}>
        <img 
        src={`${process.env.PUBLIC_URL}../../${props.destinationsData[destination].images.png}`}
        //src="../../assets/destination/image-moon.png"
        alt="" />
      </div>
      <div className={styles['destination-view__btns']}>
        <button onClick={destinationHandler.bind(null, 0)} className={destination === 0 ? cssBtnStyle.join(' ') : cssBtnStyle[0]}>Moon</button>
        <button onClick={destinationHandler.bind(null, 1)} className={destination === 1 ? cssBtnStyle.join(' ') : cssBtnStyle[0]}>Mars</button> 
        <button onClick={destinationHandler.bind(null, 2)} className={destination === 2 ? cssBtnStyle.join(' ') : cssBtnStyle[0]}>Europa</button>
        <button onClick={destinationHandler.bind(null, 3)} className={destination === 3 ? cssBtnStyle.join(' ') : cssBtnStyle[0]}>Titan</button>
      </div>
      <div className={styles['destination-view__description']}>
        <h2>{props.destinationsData[destination].name}</h2>
        <p>{props.destinationsData[destination].description}</p>
      </div>
      <div className={styles['destination-view__details']}>
        <h4>Avg. distance</h4>
        <h3>{props.destinationsData[destination].distance}</h3>
        <h4>Est. travel time</h4>
        <h3>{props.destinationsData[destination].travel}</h3>
      </div>

      
    </div> 
  )
} 

export default DestinationView;


