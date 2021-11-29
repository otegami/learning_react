const Instructions = ({ title, steps }) => {
  return (
    <session className="instructions">
      <h2>{title}</h2>
      {steps.map((step, i) => (
        <p key={i}>{step}</p>
      ))}
    </session>
  )
}

export default Instructions
