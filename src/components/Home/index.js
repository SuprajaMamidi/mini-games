import {Link} from 'react-router-dom'
import './index.css'

const Home = () => (
  <div className="div-container">
    <h1 className="game-heading">Games</h1>
    <ul className="container">
      <Link to="/emoji-game">
        <li className="card">
          <img
            src="https://res.cloudinary.com/dh5eg8uvp/image/upload/v1711893066/Group_7471_pp5at8.png"
            alt="emoji game"
            className="images-1"
          />
        </li>
      </Link>
      <Link to="/memory-matrix">
        <li className="card">
          <h1 className="name-header">Memory Matrix</h1>
          <img
            src="https://res.cloudinary.com/dh5eg8uvp/image/upload/v1711894043/memory_slwdco.png"
            alt="memory matrix"
            className="images-2"
          />
        </li>
      </Link>
      <Link to="/rock-paper-scissor">
        <li className="card">
          <h1 className="name-header">ROCK PAPER SCISSOR</h1>
          <img
            src="https://res.cloudinary.com/dh5eg8uvp/image/upload/v1711894189/Group_7469_lguytr.png"
            alt="rock paper scissor"
            className="images-3"
          />
        </li>
      </Link>
      <Link to="/card-flip-memory-game">
        <li className="card">
          <img
            src="https://res.cloudinary.com/dh5eg8uvp/image/upload/v1711894240/animals_zuzcic.png"
            alt="card flip memory game"
            className="images-4"
          />
        </li>
      </Link>
    </ul>
  </div>
)

export default Home
