import Star from './Star'

const StarRating = ({
  style,
  totalStars = 5,
  selectedStars = 0,
  onRate = f => f,
  ...props
}) => {
  return (
    <div style={{ padding: '5px', ...style }} {...props}>
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => { onRate(i + 1) }}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} starts
      </p>
    </div>
  )
}

export default StarRating
