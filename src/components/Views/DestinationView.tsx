import { FC, useState } from 'react'
import Data from '../models/data-model';
import styles from './DestinationView.module.scss';



const DestinationView: FC/* <{destinationsData: Data[]}>  */= (props) => {
  const [destination, setdestination] = useState<number>(0)


  /* const [obj] = props.destinationsData!; */

  //console.log(obj.destinations.filter((item) => item.name === 'Moon'));
/*   console.log(obj); */


  return (
    <div className={styles['destination-view']}>
      <img 
/*         src={`${process.env.PUBLIC_URL}./../../${props.destinationsData[0].destinations.name}`}
 */
      alt="" />
      <h5><span>01</span>Pick your destination</h5>
    </div>
  )
} 

export default DestinationView;
