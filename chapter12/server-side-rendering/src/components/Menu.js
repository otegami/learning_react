import React from 'react'
import Recipe from "./Recipe"

const Menu = ({ recipes, title }) => {
  return (
    <article>
      <header>
        <h1>{title}</h1>
      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipes} />
        ))}
      </div>
    </article>
  )
}

export default Menu
