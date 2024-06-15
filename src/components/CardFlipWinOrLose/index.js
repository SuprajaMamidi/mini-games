import './index.css'

const CardFlipWinOrLose = props => {
  const {score, setIsTrue, setTurns, shuffleCards} = props

  let image
  let alt
  let heading
  let heading2
  if (setIsTrue) {
    image =
      'https://res.cloudinary.com/dh5eg8uvp/image/upload/v1712922237/05_Pokerface_xfyyl7.png'
    alt = 'neutral face'
    heading = 'Better luck next time'
    heading2 = 'You did not match all of the cards in record time'
  } else if (score === 10) {
    image =
      'https://res.cloudinary.com/dh5eg8uvp/image/upload/v1712920872/03_Optimistic_m8ikwo.png'
    alt = 'grinning face with big eyes'
    heading = 'Congratulations'
    heading2 = 'You matched all of the cards in record time'
  }

  const onClickGameView = () => {
    shuffleCards()
  }

  return (
    <div className="flip-win-or-lose-bg-container">
      <img src={image} alt={alt} className="flip-win-or-lose-image" />
      <h1 className="flip-win-or-lose-heading">{heading}</h1>
      <p className="flip-win-or-lose-para-1">No.of Flips - {setTurns}</p>
      <h2 className="flip-win-or-lose-para-2">{heading2}</h2>
      <button
        type="button"
        onClick={onClickGameView}
        className="flip-win-or-lose-button"
      >
        Play Again
      </button>
    </div>
  )
}
export default CardFlipWinOrLose
