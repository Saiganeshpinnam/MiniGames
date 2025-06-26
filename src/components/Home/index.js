import {Link} from 'react-router-dom'

import './index.css'

const Home = () => (
  <div className="home-bg-container">
    <h1 className="games-heading">Games</h1>
    <ul className="game-cards-container">
      <Link className="game-container" to="/emoji-game">
        <img
          src="https://res.cloudinary.com/dccbkv07a/image/upload/v1747040906/Asset_1_4x_1_wxmfue.png"
          alt="emoji game"
        />
        <p className="game-title">Emoji Game</p>
      </Link>
      <div className="game-container">
        <p className="game-title">Memory Matrix</p>
        <img
          src="https://res.cloudinary.com/dccbkv07a/image/upload/v1747041501/memory_lzmvra.png"
          alt="memory matrix"
        />
      </div>
      <Link className="game-container" to="/rock-paper-scissor">
        <p className="game-title">ROCK PAPER SCISSOR</p>
        <img
          src="https://res.cloudinary.com/dccbkv07a/image/upload/v1747041774/Group_7469_n6awqx.png"
          alt="rock paper scissor"
        />
      </Link>
      <Link className="game-container" to="/card-flip-memory-game">
        <img
          src="https://res.cloudinary.com/dccbkv07a/image/upload/v1747041872/animals_dstq39.png"
          alt="card flip memory game"
        />
      </Link>
    </ul>
  </div>
)

export default Home
