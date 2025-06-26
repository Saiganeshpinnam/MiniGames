import {Link} from 'react-router-dom'

import {BiArrowBack} from 'react-icons/bi'

import './index.css'

const rpsRulesList = [
  {
    id: 0,
    ruleInfo:
      'The game result should be based on user and user opponent choices',
  },
  {
    id: 1,
    ruleInfo:
      'When the user choice is rock and his opponent choice is rock then the result will be IT IS DRAW',
  },
  {
    id: 2,
    ruleInfo:
      'When the user choice is paper and his opponent choice is rock then the result will be YOU WON',
  },
  {
    id: 3,
    ruleInfo:
      'When the user choice is a scissor and his opponent choice is rock then the result will be YOU LOSE',
  },
  {
    id: 4,
    ruleInfo:
      'When the user choice is paper and his opponent choice is paper then the result will be IT IS DRAW',
  },
  {
    id: 5,
    ruleInfo:
      'When the user choice is scissors and his opponent choice is paper then the result will be YOU WON',
  },
  {
    id: 6,
    ruleInfo:
      'When the user choice is rock and his opponent choice is scissors then the result will be YOU WON',
  },
  {
    id: 7,
    ruleInfo:
      'When the user choice is paper and his opponent choice is scissors then the result will be YOU LOSE',
  },
  {
    id: 8,
    ruleInfo:
      'When the user choice is scissors and his opponent choice is scissors then the result will be IT IS DRAW',
  },
  {
    id: 9,
    ruleInfo:
      'When the result is YOU WON, then the count of the score should be incremented by 1',
  },
  {
    id: 10,
    ruleInfo:
      'When the result is IT IS DRAW, then the count of the score should be the same',
  },
  {
    id: 11,
    ruleInfo:
      'When the result is YOU LOSE, then the count of the score should be decremented by 1.',
  },
]

// rps - rock paper scissor

const RockPaperScissorsHome = () => (
  <div className="rps-bg-container">
    <div className="home-content-container">
      <Link className="back-btn-container" to="/">
        <BiArrowBack className="back-icon" />
        <p className="back-text">Back</p>
      </Link>
      <h1 className="rps-heading">ROCK PAPER SCISSOR</h1>
      <img
        src="https://res.cloudinary.com/dccbkv07a/image/upload/v1747191657/Group_7469_1_dxszs3.png"
        className="rps-home-image"
        alt="rock paper scissor"
      />
      <h1 className="rps-rules-heading">Rules</h1>
      <ul className="rps-rules-container">
        {rpsRulesList.map(eachRule => (
          <li key={eachRule.id} className="each-rps-rule">
            {eachRule.ruleInfo}
          </li>
        ))}
      </ul>
    </div>
    <div className="btn-container">
      <Link to="/rps-play-area">
        <button type="button" className="start-playing-btn">
          Start playing
        </button>
      </Link>
    </div>
  </div>
)
export default RockPaperScissorsHome
