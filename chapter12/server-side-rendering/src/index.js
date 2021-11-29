import ReactDOM from "react-dom"
import Menu from "./components/Menu"
import data from "./data/recipes.json"

ReactDOM.hydrate(
  <Menu
    recipes={data}
    title="Delicious Recipes"
  />,
  document.getElementById("root")
)
