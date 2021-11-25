import { render, fireEvent } from '@testing-library/react'
import Checkbox from './Checkbox'

test("Selecting the checkbox should changed the value of checked to true", () => {
  const { getByTestId } = render(<Checkbox />)
  const checkbox = getByTestId("checkbox")
  fireEvent.click(checkbox)
  expect(checkbox.checked).toEqual(true)
  fireEvent.click(checkbox)
  expect(checkbox.checked).toEqual(false)
})
