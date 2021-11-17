import Color from './Color'

const ColorList = ({
  colors,
  onRemoveColor = f => f,
  onRateColor = f => f
}) => {
  if (!colors.length) return <div>No Color Listed</div>
  return (
    <div>
      {colors.map(color => (
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))
      }
    </div>
  )
}

export default ColorList
