import './index.css'

const CardFlipMemoryCardItem = props => {
  const {cardDetails, handleChoice, flipped, stopflip} = props
  const {name, image} = cardDetails

  const handleClick = () => {
    if (!stopflip) {
      handleChoice(cardDetails)
    }
  }

  return (
    <button
      type="button"
      className={flipped ? 'card-flip flipped' : 'card-flip'}
      onClick={handleClick}
      data-testid={name}
    >
      <div className="flip-memory-card-container">
        {!flipped && (
          <div className="card-front">
            <div className="card-front-content">
              <img
                src="https://res.cloudinary.com/dh5eg8uvp/image/upload/v1712686516/foot-print_4_ugssyv.png"
                className="back"
                alt="card back"
              />
            </div>
          </div>
        )}
        {flipped && (
          <div>
            <img src={image} alt={name} className="front" />
          </div>
        )}
      </div>
    </button>
  )
}
export default CardFlipMemoryCardItem
