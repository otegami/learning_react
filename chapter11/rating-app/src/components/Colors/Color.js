import { FaTrash, FaSearchengin } from "react-icons/fa"
import StarRating from "../StarRating"
import { useColors } from "../ColorProvider"
import { useNavigate } from "react-router-dom"

const Color = ({ id, title, color, rating }) => {
  const { rateColor, removeColor } = useColors()
  const navigate = useNavigate()

  return (
    <section
      className="color"
    >
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <button onClick={() => navigate(`/${id}`)}>
        <FaSearchengin />
      </button>
      <div style={{ height: 50, background: color }} />
      <StarRating
        selectedStars={rating}
        onRate={rating => rateColor(id, rating)}
      />
    </section>
  )
}

export default Color
