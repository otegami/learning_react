import { useReducer } from 'react'

const CheckBox = () => {
  const [checked, setChecked] = useReducer(
    checked => !checked,
    false
  )

  return (
    <>
      <label>
        {checked ? "checked" : "not checked"}
        <input
          type="checkbox"
          value={checked}
          onChange={setChecked}
          data-testid="checkbox"
        >
        </input>
      </label>
    </>
  )
}

export default CheckBox
