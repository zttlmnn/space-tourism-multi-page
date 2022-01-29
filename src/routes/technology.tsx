import { FC, useEffect, useState } from 'react'
import Loading from '../components/Utilities/Loading';
import TechnologyView from '../components/Views/TechnologyView'

const Technology: FC = () => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json')
      const data = await response.json()
      setData(data.technology)
      setisLoading(false)
    }
    fetchData()
  }, [])

if (isLoading) {
  return <Loading />
}

  return <TechnologyView technologyData={data} />
}

export default Technology;
