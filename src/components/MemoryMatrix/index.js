import './index.css'
import {BiArrowBack} from 'react-icons/bi'

import {Link} from 'react-router-dom'

const memoryRulesList = [
  {
    id: 0,
    ruleInfo:
      'In each level of the Game, Users should be able to see the Grid with (NX N) size starting from 3 and the grid will highlight N cells in Blue, the N highlighted cells will be picked randomly.',
  },
  {
    id: 1,
    ruleInfo:
      'The highlighted cells will remain N seconds for the user to memorize the cells. At this point, the user should not be able to perform any action.',
  },
  {
    id: 2,
    ruleInfo: 'After N seconds, the grid will clear the N highlighted cells.',
  },
  {
    id: 3,
    ruleInfo:
      'At N seconds, the user can click on any cell. Clicking on a cell that was highlighted before it will turn blue. Clicking on the other cells that were not highlighted before then will turn to red.',
  },
  {
    id: 4,
    ruleInfo:
      'The user should be promoted to the next level if they guess all N cells correctly in one attempt.',
  },
  {
    id: 5,
    ruleInfo:
      'The user should be taken to the results page if the user clicks on the wrong cell.',
  },
  {
    id: 6,
    ruleInfo:
      'If the user completed all the levels, then the user should be taken to the results page.',
  },
]

const MemoryMatrix = () => {
  return (
    <div className="memory-rules-bg-container">
      <Link className="memory-rules-back-btn-container" to="/">
        <BiArrowBack className="back-icon" />
        <p className="back-text">Back</p>
      </Link>
      <div className="name-logo-container">
        <h1 className="memory-matrix-title">Memory Matrix</h1>
        <img
          src="https://res.cloudinary.com/dccbkv07a/image/upload/v1751257897/memory_c8xhbe.png"
          alt="memory-matrix"
          className="memory-matrix-image"
        />
      </div>
      <div className="memory-rules-container">
        <h1 className="memory-rules-text">Rules</h1>
        <ul className="memory-rules-content-container">
          {memoryRulesList.map(eachRule => (
            <li key={eachRule.id} className="each-memory-rule">
              {eachRule.ruleInfo}
            </li>
          ))}
        </ul>
        <Link to="/memory-matrix-play-area">
          <button type="button" className="memory-start-btn">
            Start playing
          </button>
        </Link>
      </div>
    </div>
  )
}

export default MemoryMatrix
