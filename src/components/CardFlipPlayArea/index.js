import {Link} from 'react-router-dom'

import './index.css'

import {Component} from 'react'

import Popup from 'reactjs-popup'

import {CgClose} from 'react-icons/cg'

import {BiArrowBack} from 'react-icons/bi'

const flipGameRules = [
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

const cardsData = [
  {
    id: 0,
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    id: 1,
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    id: 2,
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    id: 3,
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    id: 4,
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
  {
    id: 5,
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    id: 6,
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    id: 7,
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    id: 8,
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    id: 9,
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },

  {
    id: 10,
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    id: 11,
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    id: 12,
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    id: 13,
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    id: 14,
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
  {
    id: 15,
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    id: 16,
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    id: 17,
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    id: 18,
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    id: 19,
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },
]

class CardFlipPlayArea extends Component {
  state = {
    shuffledCards: [],
    flippedCards: [],
    matchedCardIds: [],
    isComparing: false,
    score: 0,
    flipCount: 0,
    timerInSeconds: 60,
  }

  componentDidMount() {
    this.shuffleCards(),
      (this.IntervalId = setInterval(this.decrementTimeElapsedSeconds, 1000))
  }

  componentWillUnmount() {
    clearInterval(this.timmerid)
  }

  shuffleCards = () => {
    const shuffled = [...cardsData].sort(() => Math.random() - 0.5)
    this.setState({shuffledCards: shuffled})
  }

  onCardClick = clickedCard => {
    const {flippedCards, matchedCardIds, isComparing} = this.state
    if (
      isComparing ||
      flippedCards.some(card => card.id === clickedCard.id) ||
      matchedCardIds.includes(clickedCard.id)
    ) {
      return
    }
    const newFlippedCards = [...flippedCards, clickedCard]
    this.setState(
      prevState => ({
        flippedCards: newFlippedCards,
        flipCount: prevState.flipCount + 1,
      }),
      () => {
        if (newFlippedCards.length === 2) {
          this.compareFlippedCards()
        }
      },
    )
  }

  compareFlippedCards = () => {
    this.setState({
      isComparing: true,
    })
     const {flippedCards, flipCount} = this.state
    const [firstCard, secondCard, score] =flippedCards

    if (firstCard.name === secondCard.name) {
      this.setState(prevState => ({
        matchedCardIds: [
          ...prevState.matchedCardIds,
          firstCard.id,
          secondCard.id,
        ],
        flippedCards: [],
        isComparing: false,
        score: prevState.score + 1,
        flipCount: prevState.flipCount + 1,
      }))
    } else {
      setTimeout(() => {
        this.setState({
          flippedCards: [],
          isComparing: false,
        })
      }, 2000)
    }
  }

  isCardFlipped = card => {
    const {flippedCards, matchedCardIds} = this.state
    return (
      flippedCards.some(flipped => flipped.id === card.id) ||
      matchedCardIds.includes(card.id)
    )
  }

  decrementTimeElapsedSeconds = () => {
    const {timerInSeconds} = this.state
    if (timerInSeconds === 0) {
      clearInterval(this.IntervalId)
    }
    this.setState(prevState => ({
      timerInSeconds: prevState.timerInSeconds - 1,
    }))
  }

  getFormattedTime = () => {
    const {timerInSeconds, timerValue} = this.state
    const stringifiedSeconds =
      timerInSeconds > 9 ? timerInSeconds : `0${timerInSeconds}`

    return stringifiedSeconds
  }

  renderGamingArea = () => {
    const {shuffledCards, score, flipCount} = this.state
    return (
      <div className="cards-play-area-bg-container">
        <div className="count-timer-score-container">
          <Link className="back-btn-container" to="/card-flip-memory-game">
            <BiArrowBack className="back-icon" />
            <p className="back-text">Back</p>
          </Link>
          <p className="flip-count">
            Card Flip Count -{' '}
            {flipCount <= 9 ? `0${flipCount}` : `${flipCount}`}
          </p>
          <p className="timer-seconds">{this.getFormattedTime()} Sec</p>
          <p className="flip-score">
            {score <= 9 ? `Score - 0${score}` : `Score - ${score}`}
          </p>
          <Popup
            modal
            trigger={
              <button type="button" className="rules-btn">
                Rules
              </button>
            }
          >
            {close => (
              <div className="modal-container">
                <button type="button" onClick={() => close()}>
                  <CgClose className="close-btn" />
                </button>

                <h1 className="modal-rules-heading">Rules</h1>
                <ul>
                  {flipGameRules.map(eachRule => (
                    <li key={eachRule.id} className="each-modal-rule">
                      {eachRule.ruleInfo}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Popup>
        </div>
        <ul className="cards-container">
          {shuffledCards.map(eachCard => {
            const isFlipped = this.isCardFlipped(eachCard)
            return (
              <li key={eachCard.id} className="each-card-item">
                <button
                  type="button"
                  className="card-btn-image"
                  onClick={() => this.onCardClick(eachCard)}
                  disabled={isFlipped}
                >
                  <img
                    src={
                      isFlipped
                        ? eachCard.image
                        : 'https://res.cloudinary.com/dccbkv07a/image/upload/v1747336155/foot-print_1_vw55gu.png'
                    }
                    className="card-image"
                    alt="card"
                  />
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  onClickingPlayAgainBtn = () => {
    const {timerInSeconds, score, timerValue} = this.state
    this.setState({
      timerValue: 60,
      score: 0,
      flipCount: 0,
    })
  }

  renderGameResult = () => {
    const {score, shuffledCards, flipCount} = this.state

    return (
      <>
        {score === shuffledCards.length / 2 ? (
          <div className="result-container">
            <img
              src="https://res.cloudinary.com/dccbkv07a/image/upload/v1750946903/2x_vu75nf.png"
              alt="grinning face with big eyes"
              className="result-emoji-face"
            />
            <p className="game-status-message">Congratulations!</p>
            <p className="flip-count">No.of Flips -{flipCount}</p>
            <p className="matched-message">
              You matched all of the cards in record time
            </p>
            <button
              type="button"
              className="play-again-flip-game"
              onClick={this.onClickingPlayAgainBtn}
            >
              Play Again
            </button>
          </div>
        ) : (
          <div className="result-container">
            <img
              src="https://res.cloudinary.com/dccbkv07a/image/upload/v1750935379/05_Pokerface_wwmc9i.png"
              alt="neutral face"
              className="result-emoji-face"
            />
            <p className="game-status-message">Better luck next time!</p>
            <p className="flip-count">No.of Flips -{flipCount}</p>
            <p className="matched-message">
              You did not match all of the cards in record time
            </p>
            <button
              type="button"
              className="play-again-flip-game"
              onClick={this.onClickingPlayAgainBtn}
            >
              Play Again
            </button>
          </div>
        )}
      </>
    )
  }

  render() {
    const timerValue = this.getFormattedTime()
    const {shuffledCards, score} = this.state
    console.log(shuffledCards.length / 2)
    return (
      <>
        {timerValue > 0 && shuffledCards.length / 2 !== score
          ? this.renderGamingArea()
          : this.renderGameResult()}
      </>
    )
  }
}

export default CardFlipPlayArea
