import './index.css'

const wonImage =
  'https://res.cloudinary.com/dh5eg8uvp/image/upload/v1711964751/Group_7608_flrxqy.png'
const loseImage =
  'https://res.cloudinary.com/dh5eg8uvp/image/upload/v1711964743/Group_7607_nl5wbj.png'

const EmojiWinOrLose = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon ? wonImage : loseImage
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const altAtt = isWon ? 'won' : 'lose'
  const scoreText = isWon ? 'Best Score' : 'Score'
  return (
    <div className="win-container">
      <div className="emoji-text-score">
        <h1 className="emoji-score-heading">{gameStatus}</h1>
        <p className="emoji-score-para">{scoreText}</p>
        <p className="emoji-score-in-card">{score}/12</p>
        <button
          type="button"
          onClick={onClickPlayAgain}
          className="emoji-score-button"
        >
          Play Again
        </button>
      </div>
      <div>
        <img src={imageUrl} alt={altAtt} className="win-or-lose-image" />
      </div>
    </div>
  )
}
export default EmojiWinOrLose
