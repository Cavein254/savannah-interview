import { IoArrowBackCircleSharp } from "react-icons/io5"
import { useNavigate } from "react-router-dom"

const GoBack = () => {
  const navigate = useNavigate()
  return (
    <button
      className="dark:hover:text-green-600 text-green-600"
      onClick={() => navigate(-1)}
    >
      <IoArrowBackCircleSharp size={32} />
    </button>
  )
}

export default GoBack
