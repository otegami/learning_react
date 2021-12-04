import fetch from "isomorphic-fetch"
import { useState, useEffect } from "react"
import Layout from "../components/Layout"

const Pets = (props) => {
  const [pets, setPets] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getPets = async () => {
      const res = await fetch(`http://pet-library.moonhighway.com/api/pets`)
      const data = await res.json()

      return data
    }

    const load = async () => {
      setLoading(true)
      try {
        const petsArray = await getPets()
        setPets(petsArray)
      } catch (err) {
        throw new Error(`Pets don't exist.`);
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  if (loading) { return <div>loading...</div> }

  return (
    <Layout>
      <h1>Pets!</h1>
      <ul>
        {pets.map((pet) => <li key={pet.id}>{pet.name}</li>)}
      </ul>
    </Layout>
  )
}

export default Pets
