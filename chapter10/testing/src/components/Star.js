import { FaStar } from 'react-icons/fa'

const Star = ({ selected = false }) => {
  return (
    <>
      <h1>Great Star</h1>
      <FaStar
        id="star"
        color={selected ? "red" : "grey"}
      />
    </>
  )
}

export default Star
