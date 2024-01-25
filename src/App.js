import {useState} from 'react'
import './App.css'
const App = () => {
  const [rating, setRating] = useState(0)

  const handleClick = i => {
    setRating(i)
  }
  const Stars = () => {
    let stars = []

    for (let i = 0; i < 5; i += 1) {
      let isActive = rating >= i + 1
      stars.push(
        <div
          key={i}
          className={`star ${isActive ? 'active' : ' '}`}
          onClick={() => handleClick(i + 1)}
        >
          {isActive ? <> &#9733;</> : <> &#9734;</>}
        </div>,
      )
    }

    return stars
  }
  return (
    <div className="rating-container">
      <Stars />
    </div>
  )
}
export default App
