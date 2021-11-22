import { useState } from 'react'
import PureCat from './components/Cat'

const App = () => {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"])
  return (
    <>
      {cats.map((name, i) => (
        <PureCat
          key={i}
          name={name}
          meow={name => console.log(`${name} has meowed`)}
        />
      ))}
      <button onClick={() => setCats([...cats, prompt("Name a cat")])}>
        Add a Cat
      </button>
    </>
  )
}

export default App
