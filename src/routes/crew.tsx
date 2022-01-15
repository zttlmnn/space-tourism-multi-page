import { FC, useEffect, useState } from 'react'
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
  return <section>
    <p>LOADING...</p>
  </section>
}
console.log(data);
return <CrewView crewData={data} />


}

export default Crew;
