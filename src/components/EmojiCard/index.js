import './index.css'

const EmojiCard = props => {
  const {clickEmoji, emojiDetails} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="list-items">
      <button
        type="button"
        onClick={onClickEmojiCard}
        className="emoji-container"
      >
        <img src={emojiUrl} alt={emojiName} className="emoji-each-image" />
      </button>
    </li>
  )
}
export default EmojiCard
