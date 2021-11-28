import { useRoutes } from "react-router-dom"
import { Home, About, Events, Products, Contact, Whoops404, Services } from "./pages"

const App = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "about", element: <About />, children: [{ path: "services", element: <Services /> }] },
    { path: "events", element: <Events /> },
    { path: "products", element: <Products /> },
    { path: "contact", element: <Contact /> },
    { path: "*", element: <Whoops404 /> },
    {
      path: "services",
      redirectTo: "about/services"
    }
  ]

  const element = useRoutes(routes)

  return element
}

export default App
