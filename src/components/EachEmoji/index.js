import './index.css'

const EachEmoji = props => {
  const {eachEmoji, onClickEmoji} = props
  const {emojiUrl, emojiName, id} = eachEmoji
  const onSelectingEmoji = () => {
    onClickEmoji(id)
  }
  return (
    <li>
      <button
        type="button"
        className="each-emoji-container"
        onClick={onSelectingEmoji}
      >
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}
export default EachEmoji
