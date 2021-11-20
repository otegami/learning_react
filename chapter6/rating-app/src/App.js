import { useState } from 'react'
import ColorData from './color-data.json'
import ColorList from './components/ColorList'
import AddColorForm from './components/AddColorForm'
import { v4 } from 'uuid'

const App = () => {
  const [colors, setColors] = useState(ColorData)
  return (
    <>
      <AddColorForm
        onNewColor={(title, color) => {
          const newColors = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title,
              color
            }]
          setColors(newColors)
        }}
      />
      <ColorList
        colors={colors}
        onRemoveColor={id => {
          const newColors = colors.filter((color) => color.id !== id)
          setColors(newColors)
        }}
        onRateColor={(id, rating) => {
          const newColors = colors.map((color) =>
            color.id === id ? { ...color, rating } : color
          )
          setColors(newColors)
        }}
      />
    </>
  )
}

export default App
