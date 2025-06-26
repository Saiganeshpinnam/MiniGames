import './index.css'

const WinOrLoseCard = props => {
  const {
    isGameWon,
    userSelectionEmojiList,
    updatePlayAgainStatus,
    isGameInProgress,
    resetScoreStartGame,
    updateTopScore,
  } = props

  const onClickingPlayAgainBtn = () => {
    updatePlayAgainStatus(isGameInProgress)
    resetScoreStartGame()
    updateTopScore()
  }

  return (
    <div className="bg-container">
      <div className="header-container">
        <div className="emoji-container">
          <img
            src="https://res.cloudinary.com/dccbkv07a/image/upload/v1747049661/wink_1_e5swn7.png"
            className="emoji-logo"
            alt="emoji logo"
          />
          <h1 className="emoji-game-heading">Emoji Game</h1>
        </div>
      </div>
      <div className="game-result-bg-container">
        {isGameWon ? (
          <div className="game-result-container">
            <div className="result-text-container">
              <h1 className="you-lose-heading">You Won</h1>
              <p className="best-score">Best Score</p>
              <p className="user-score">{userSelectionEmojiList.length}/12</p>

              <button
                type="button"
                className="play-again-btn"
                onClick={onClickingPlayAgainBtn}
              >
                Play Again
              </button>
            </div>
            <img
              src="https://res.cloudinary.com/dccbkv07a/image/upload/v1747102872/Image_1_zldfln.png"
              alt="won"
              className="result-image"
            />
          </div>
        ) : (
          <div className="game-result-container">
            <div className="result-text-container">
              <h1 className="you-lose-heading">You Lose</h1>
              <p className="best-score">Best Score</p>
              {userSelectionEmojiList.length < 10 ? (
                <p className="user-score">
                  0{userSelectionEmojiList.length}/12
                </p>
              ) : (
                <p className="user-score">{userSelectionEmojiList.length}/12</p>
              )}
              <button
                type="button"
                className="play-again-btn"
                onClick={onClickingPlayAgainBtn}
              >
                Play Again
              </button>
            </div>
            <img
              src="https://res.cloudinary.com/dccbkv07a/image/upload/v1747100715/Image_fj6f3l.png"
              alt="lose"
              className="result-image"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default WinOrLoseCard
