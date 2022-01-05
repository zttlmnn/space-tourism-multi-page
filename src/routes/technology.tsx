import { FC, useEffect, useState } from 'react'
import TechnologyView from '../components/Views/TechnologyView'

const Technology: FC = () => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json')
      const data = await response.json()
      console.log(data.technology[0]);
      setData(data.technology)
      setisLoading(false)

    }
    fetchData()
    

  }, [])

if (isLoading) {
  return <section>
    <p>LOADING...</p>
  </section>
}

return <TechnologyView technologyData={data} />
}

export default Technology;
