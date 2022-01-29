import React, { FC, useEffect, useState } from 'react'
import Loading from '../components/Utilities/Loading';
import DestinationView from '../components/Views/DestinationView';

const Destination: FC = () => {
const [data, setData] = useState([]);
const [isLoading, setisLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json')
      const data = await response.json()
      console.log(data.destinations[0]);
      setData(data.destinations)
      setisLoading(false)
    }
    fetchData()
    

  }, [])
/* 
if (isLoading) {
  return <Loading />

}
 */
if (isLoading) {
  return <Loading />

}


// console.log(keys); // ['destinations', 'crew', 'technology']




 return <DestinationView destinationsData={data} />
}

export default Destination;
