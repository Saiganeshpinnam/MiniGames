import {Link} from 'react-router-dom'

import {BiArrowBack} from 'react-icons/bi'

import './index.css'

const cardFlipRules = [
  {
    id: 0,
    ruleInfo:
      'When the game is started, the users should be able to see the list of Cards that are shuffled and turned face down.',
  },
  {
    id: 1,
    ruleInfo:
      'When a user starts the game, the user should be able to see the Timer running.',
  },
  {
    id: 2,
    ruleInfo: 'The Timer starts from 2 Minutes.',
  },
  {
    id: 3,
    ruleInfo:
      'If the two cards have the same image, they remain face up. If not, they should be flipped face down again after a short 2 seconds.',
  },
  {
    id: 4,
    ruleInfo: 'Users should be able to compare only two cards at a time.',
  },
  {
    id: 5,
    ruleInfo:
      'When the user is not able to find all the cards before the timer ends then the game should end and redirect to the Time Up Page.',
  },
  {
    id: 6,
    ruleInfo:
      'If the user finds all the matching cards before the timer ends, then the user should be redirected to the results page.',
  },
]

const CardFlipMemoryGame = () => (
  <div className="card-rules-bg-container">
    <Link className="back-btn-container" to="/">
      <BiArrowBack className="back-icon" />
      <p className="back-text">Back</p>
    </Link>
    <img
      src="https://res.cloudinary.com/dccbkv07a/image/upload/v1747332975/animals_1_ct2wrw.png"
      className="animals-image"
    />
    <h1 className="card-flip-rules-heading">Rules</h1>
    <ul className="card-game-rules-container">
      {cardFlipRules.map(eachRule => (
        <li key={eachRule.id} className="each-card-flip-rule">
          {eachRule.ruleInfo}
        </li>
      ))}
    </ul>
    <Link to="/card-flip-play-area">
      <button type="button" className="start-playing-btn">
        Start playing
      </button>
    </Link>
  </div>
)
export default CardFlipMemoryGame
