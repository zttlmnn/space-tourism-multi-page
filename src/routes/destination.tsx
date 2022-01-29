import { FC, useEffect, useState } from 'react'
import Loading from '../components/Utilities/Loading';
import DestinationView from '../components/Views/DestinationView';

const Destination: FC = () => {
const [data, setData] = useState([]);
const [isLoading, setisLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json')
      const data = await response.json()
      setData(data.destinations)
      setisLoading(false)
    }
    fetchData()
  }, [])

if (isLoading) {
  return <Loading />
}

 return <DestinationView destinationsData={data} />
}

export default Destination;
