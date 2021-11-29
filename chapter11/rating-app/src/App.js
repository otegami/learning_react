import ColorProvider from './components/ColorProvider'
import ColorDetails from './components/Colors/ColorDetails'
import ColorList from './components/ColorList'
import AddColorForm from './components/AddColorForm'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <ColorProvider>
      <AddColorForm />
      <Routes>
        <Route
          path="/"
          element={<ColorList />}
        />
        <Route
          path=":id"
          element={<ColorDetails />}
        />
      </Routes>
    </ColorProvider>
  )
}

export default App
