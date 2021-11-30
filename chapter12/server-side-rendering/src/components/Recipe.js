import React from 'react'
import IngredientsList from './IngredientsList'
import Instructions from './Instructions'

const Recipe = ({ name, ingredients, steps }) => {
  return (
    <session id={name.toLowerCase().replace(/ /g, '-')}>
      <h1>{name}</h1>
      <IngredientsList list={ingredients} />
      <Instructions title={'Cooking Instructions'} steps={steps} />
    </session>
  )
}

export default Recipe
