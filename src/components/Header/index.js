import './index.css'

const Header = props => {
  const {userSelectionEmojiList, topScore} = props

  return (
    <div className="header-bg-container">
      <div className="emoji-container">
        <img
          src="https://res.cloudinary.com/dccbkv07a/image/upload/v1747049661/wink_1_e5swn7.png"
          className="emoji-logo"
          alt="emoji logo"
        />
        <h1 className="emoji-game-heading">Emoji Game</h1>
      </div>
      <div className="score-container">
        <p>Score:{userSelectionEmojiList.length}</p>
        <p>Top Score: {topScore}</p>
      </div>
    </div>
  )
}

export default Header
