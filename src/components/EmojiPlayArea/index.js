import {Component} from 'react'

import {Link} from 'react-router-dom'

import {BiArrowBack} from 'react-icons/bi'

import Popup from 'reactjs-popup'

import {CgClose} from 'react-icons/cg'

import Header from '../Header'

import EachEmoji from '../EachEmoji'

import WinOrLoseCard from '../WinOrLoseCard'

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

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class EmojiPlayArea extends Component {
  state = {
    userSelectionEmojiList: [],
    isGameInProgress: true,
    isGameWon: false,
    topScore: 0,
  }

  onClickingEmoji = id => {
    const {userSelectionEmojiList} = this.state
    if (userSelectionEmojiList.includes(id)) {
      this.setState({
        isGameInProgress: false,
      })
    } else {
      const updatedUserSelectionEmojiList = [...userSelectionEmojiList, id]
      if (updatedUserSelectionEmojiList.length === emojisList.length) {
        this.setState({
          userSelectionEmojiList: updatedUserSelectionEmojiList,
          isGameInProgress: false,
          isGameWon: true,
        })
      } else {
        this.setState({
          userSelectionEmojiList: updatedUserSelectionEmojiList,
        })
      }
    }
  }

  updatePlayAgainStatus = changeStatus => {
    this.setState({
      isGameInProgress: !changeStatus,
    })
  }

  resetScoreStartGame = () => {
    this.setState({
      userSelectionEmojiList: [],
    })
  }

  updateTopScore = () => {
    const {userSelectionEmojiList, topScore} = this.state

    console.log(userSelectionEmojiList.length)
    console.log(topScore)
    if (userSelectionEmojiList.length > topScore) {
      this.setState({
        topScore: userSelectionEmojiList.length,
      })
    }
  }

  shuffleEmojis = () => emojisList.sort(() => Math.random() - 0.5)

  render() {
    const {
      userSelectionEmojiList,
      isGameInProgress,
      isGameWon,
      topScore,
    } = this.state
    const shuffledEmojisList = this.shuffleEmojis()
    return (
      <div className="play-area-bg-container">
        {isGameInProgress ? (
          <>
            <Header
              userSelectionEmojiList={userSelectionEmojiList}
              topScore={topScore}
            />
            <div className="back-rules-container">
              <Link className="back-btn-container" to="/emoji-game">
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
                  <div className="modal-container">
                    <button type="button" onClick={() => close()}>
                      <CgClose className="close-btn" />
                    </button>

                    <h1 className="modal-rules-heading">Rules</h1>
                    <ul>
                      {rulesList.map(eachRule => (
                        <li key={eachRule.id} className="each-modal-rule">
                          {eachRule.ruleInfo}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Popup>
            </div>
            <ul className="emojis-container">
              {shuffledEmojisList.map(eachEmoji => (
                <EachEmoji
                  eachEmoji={eachEmoji}
                  key={eachEmoji.id}
                  onClickEmoji={this.onClickingEmoji}
                />
              ))}
            </ul>
          </>
        ) : (
          <WinOrLoseCard
            isGameWon={isGameWon}
            userSelectionEmojiList={userSelectionEmojiList}
            updatePlayAgainStatus={this.updatePlayAgainStatus}
            isGameInProgress={isGameInProgress}
            resetScoreStartGame={this.resetScoreStartGame}
            updateTopScore={this.updateTopScore}
          />
        )}
      </div>
    )
  }
}

export default EmojiPlayArea
