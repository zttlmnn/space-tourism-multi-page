import React, { useEffect } from 'react'
import DestinationView from '../components/Views/DestinationView';
import useFetchData from '../hooks/use-fetch';
import { getData } from '../lib/api';

const Destination  = () => {

  const { fetchData, data } = useFetchData(getData);

  useEffect(() => {
    fetchData();

  }, [fetchData]);

  

 // const destinationsData = data.filter(arr => arr.id === "destinations")
 
 const destinationsData = data;
 //const keys = Object.keys(destinationsData)

 //console.log(values); // [ARR DESTINATION, ARR CREW, ARR TECHNOLOGY]
 ////console.log(values[0]); // [ARR DESTINATION]


console.log(destinationsData);
const dataArr  = Object.values(destinationsData)
console.log(dataArr[0]);
const filtered = dataArr[0]
console.log(filtered);


// console.log(keys); // ['destinations', 'crew', 'technology']



  return <DestinationView /* destinationsData={destinationsData} */ />
}

export default Destination;
