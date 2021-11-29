import { useParams } from 'react-router-dom'
import { useColors } from '../ColorProvider'

const ColorDetails = () => {
  const { id } = useParams()
  const { colors } = useColors()

  const foundColor = colors.find(color => color.id === id)

  return (
    <div>
      <h1>Details</h1>
      <div
        style={{
          backgroundColor: foundColor.color,
          height: 100,
          width: 100
        }}
      />
      <h2>{foundColor.title}</h2>
      <h2>{foundColor.color}</h2>
    </div>
  )
}

export default ColorDetails
