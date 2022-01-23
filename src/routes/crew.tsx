import { FC, useEffect, useState } from 'react'
import Loading from '../components/Utilities/Loading';
import CrewView from '../components/Views/CrewView';

const Crew: FC = () => {
const [data, setData] = useState([]);
const [isLoading, setisLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json')
      const data = await response.json()
      console.log(data.crew[0]);
      setData(data.crew)
      setisLoading(false)

    }
    fetchData()
    

  }, [])

if (isLoading) {
  return <Loading />
}
console.log(data);
return <CrewView crewData={data} />


}

export default Crew;
