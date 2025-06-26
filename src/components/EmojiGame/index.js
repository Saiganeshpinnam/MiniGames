import {BiArrowBack} from 'react-icons/bi'

import {Link} from 'react-router-dom'

import './index.css'

const rulesList = [
  {
    id: 0,
    ruleInfo: 'User should be able to see the list of Emojis',
  },
  {
    id: 1,
    ruleInfo:
      'When the user clicks any one of the Emoji for the first time, then the count of the score should be incremented by 1 and the List of emoji cards should be shuffled.',
  },
  {
    id: 2,
    ruleInfo:
      'This process should be repeated every time the user clicks on an emoji card',
  },
  {
    id: 3,
    ruleInfo:
      'When the user clicks on all Emoji cards without clicking any of it twice, then the user will win the game',
  },
  {
    id: 4,
    ruleInfo:
      'When the user clicks on the same Emoji for the second time, then the user will lose the game.',
  },
  {
    id: 5,
    ruleInfo:
      'Once the game is over, the user will be redirected to the results page.',
  },
]

const EmojiGame = () => (
  <div className="rules-bg-container">
    <Link className="back-btn-container" to="/">
      <BiArrowBack className="back-icon" />
      <p className="back-text">Back</p>
    </Link>
    <div className="rules-flex-container">
      <div className="rules-emoji-container">
        <img
          src="https://res.cloudinary.com/dccbkv07a/image/upload/v1747045691/Asset_1_4x_1_1_c7voem.png"
          alt="emoji game"
        />
        <div className="rules-container">
          <h1 className="rules-heading">Rules</h1>
          <ul>
            {rulesList.map(eachRule => (
              <li key={eachRule.id} className="each-rule">
                {eachRule.ruleInfo}
              </li>
            ))}
          </ul>
          <Link to="/emoji-play-area">
            <button type="button" className="start-btn">
              Start playing
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
)
export default EmojiGame
