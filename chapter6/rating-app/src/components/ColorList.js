import { useContext } from 'react'
import Color from './Color'
import { useColors } from './ColorProvider'

const ColorList = () => {
  const { colors } = useColors()
  if (!colors.length) return <div>No Color Listed</div>

  return (
    <div>
      {colors.map(color => <Color key={color.id} {...color} />)}
    </div>
  )
}

export default ColorList
