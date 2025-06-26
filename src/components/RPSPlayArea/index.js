import {Link} from 'react-router-dom'

import {BiArrowBack} from 'react-icons/bi'

import './index.css'

import {Component} from 'react'

import Popup from 'reactjs-popup'

import {CgClose} from 'react-icons/cg'

const choicesList = [
  {
    id: 'rock',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'scissor',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'paper',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

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

class RPSPlayArea extends Component {
  state = {
    showChoices: true,
    myChoiceImage: '',
    opponentChoiceImage: '',
    myChoiceId: '',
    opponentChoiceId: '',
    result: '',
    score: 0,
  }

  onClickPlayAgain = () => {
    this.setState({
      showChoices: true,
    })
  }

  // renderEmojis = () => {
  //   const {result} = this.state
  //   return (
  //     <>
  //       if (result === 'YOU WON')
  //       {
  //         <img
  //           src="https://res.cloudinary.com/dccbkv07a/image/upload/v1747314935/Group_7618_kg6ru2.png"
  //           className="you-won-emoji"
  //           alt="won"
  //         />
  //       }
  //       else if((result === 'YOU LOSE'))
  //       {
  //         <img
  //           src="https://res.cloudinary.com/dccbkv07a/image/upload/v1747328925/Emoji_2_kvm9jg.png"
  //           className="you-won-emoji"
  //           alt="lose"
  //         />
  //       }
  //       else
  //       {
  //         <img
  //           src="https://res.cloudinary.com/dccbkv07a/image/upload/v1747328850/Emoji_1_x1lk0y.png"
  //           className="you-won-emoji"
  //           alt="draw"
  //         />
  //       }
  //     </>
  //   )
  // }

  renderGamingArea = () => {
    const {myChoiceImage, opponentChoiceImage, result, score} = this.state
    return (
      <>
        <div className="emoji-score-container">
          <div className="rps-container">
            <p className="game-text">Rock</p>
            <p className="game-text">Paper</p>
            <p className="game-text">Scissor</p>
          </div>
          <img
            src="https://res.cloudinary.com/dccbkv07a/image/upload/v1747314935/Group_7618_kg6ru2.png"
            className="you-won-emoji"
            alt="won"
          />
          <div className="score-container">
            <p className="score-text">Score</p>
            <p className="user-score">{score}</p>
          </div>
        </div>
        <div className="you-opponent-text-container">
          <p className="you-text">You</p>
          <p className="opponent-text">Opponent</p>
        </div>
        <div className="result-container">
          <img src={myChoiceImage} className="your-choice-image" />
          <div className="you-won-container">
            <img
              src="https://res.cloudinary.com/dccbkv07a/image/upload/v1747318259/Emoji_lxfp1b.png"
              className="happy-emoji"
            />
            <p className="you-won-text">{result}</p>
            <button
              type="button"
              className="play-rps-again-btn"
              onClick={this.onClickPlayAgain}
            >
              Play Again
            </button>
          </div>
          <img src={opponentChoiceImage} className="opponent-choice-image" />
        </div>
      </>
    )
  }

  calculateScore = () => {
    const {myChoiceId, opponentChoiceId, score} = this.state
    if (myChoiceId === opponentChoiceId) {
      this.setState({
        result: 'IT IS DRAW',
      })
      return
    }
    const winConditions = {
      rock: 'scissor',
      paper: 'rock',
      scissor: 'paper',
    }
    if (winConditions[myChoiceId] === opponentChoiceId) {
      this.setState(prevState => ({
        result: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else {
      this.setState(prevState => ({
        result: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    }
  }

  getRandomImage = () => {
    const opponentRandomChoiceNumber = Math.floor(
      Math.random() * choicesList.length,
    )
    const opponentChoiceImage = choicesList[opponentRandomChoiceNumber].imageUrl
    this.setState(
      {
        opponentChoiceImage,
        opponentChoiceId: choicesList[opponentRandomChoiceNumber].id,
      },
      this.calculateScore,
    )
  }

  onClickingMyChoice = eachChoiceImage => {
    this.setState(
      {
        myChoiceImage: eachChoiceImage.imageUrl,
        myChoiceId: eachChoiceImage.id,
        showChoices: false,
      },
      this.getRandomImage,
    )
  }

  renderChoices = () => {
    const {score} = this.state
    return (
      <>
        <div className="rps-score-container">
          <div className="rps-container">
            <p className="game-text">Rock</p>
            <p className="game-text">Paper</p>
            <p className="game-text">Scissor</p>
          </div>
          <div className="score-container">
            <p className="score-text">Score</p>
            <p className="user-score">{score}</p>
          </div>
        </div>
        <p className="lets-pick-text">Let’s pick</p>
        <ul className="options-container">
          {choicesList.map(eachChoiceImage => (
            <li key={eachChoiceImage.id}>
              <button
                type="button"
                data-testid={`${eachChoiceImage.id}Button`}
                onClick={() => this.onClickingMyChoice(eachChoiceImage)}
                className="my-choice-btn"
              >
                <img src={eachChoiceImage.imageUrl} className="option-image" />
              </button>
            </li>
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {showChoices, myChoiceImage} = this.state
    return (
      <div className="play-bg-container">
        <div className="back-rules-btn-container">
          <Link className="back-btn-container" to="/rock-paper-scissor">
            <BiArrowBack className="back-icon" />
            <p className="back-text">Back</p>
          </Link>
          <Popup
            modal
            trigger={
              <button type="button" className="rules-btn">
                Rules
              </button>
            }
          >
            {close => (
              <div className="rps-modal-container">
                <button type="button" onClick={() => close()}>
                  <CgClose className="close-btn" />
                </button>

                <h1 className="modal-rules-heading">Rules</h1>
                <ul className="rules-set-container">
                  {rpsRulesList.map(eachRule => (
                    <li key={eachRule.id} className="each-rps-modal-rule">
                      {eachRule.ruleInfo}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Popup>
        </div>
        <h1 className="rps-heading">ROCK PAPER SCISSOR</h1>

        {showChoices ? this.renderChoices() : this.renderGamingArea()}
      </div>
    )
  }
}

export default RPSPlayArea
