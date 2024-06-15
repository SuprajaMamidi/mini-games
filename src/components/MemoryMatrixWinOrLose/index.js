import {Line} from 'rc-progress'

import './index.css'

const emojisArray = [
  {
    id: 'neutral face',
    imageUrl:
      'https://res.cloudinary.com/dh5eg8uvp/image/upload/v1713513162/05_Pokerface_mpf2qz.png',
  },
  {
    id: 'grimacing face',
    imageUrl:
      'https://res.cloudinary.com/dh5eg8uvp/image/upload/v1713513231/07_Grimmace_w4mtt1.png',
  },
  {
    id: 'slightly smiling face',
    imageUrl:
      'https://res.cloudinary.com/dh5eg8uvp/image/upload/v1713513320/01_Smile_bm4db8.png',
  },
  {
    id: 'grinning face with big eyes',
    imageUrl:
      'https://res.cloudinary.com/dh5eg8uvp/image/upload/v1713513385/03_Optimistic_uzbve8.png',
  },
  {
    id: 'grinning face with smiling eyes',
    imageUrl:
      'https://res.cloudinary.com/dh5eg8uvp/image/upload/v1713513433/04_Grin_qndnyl.png',
  },
  {
    id: 'beaming face with smiling eyes',
    imageUrl:
      'https://res.cloudinary.com/dh5eg8uvp/image/upload/v1713513486/05_Laugh_k3hs06.png',
  },
  {
    id: 'grinning face',
    imageUrl:
      'https://res.cloudinary.com/dh5eg8uvp/image/upload/v1713513536/02_Happy_sq6yo3.png',
  },
  {
    id: 'smiling face with sunglasses',
    imageUrl:
      'https://res.cloudinary.com/dh5eg8uvp/image/upload/v1713513877/02_Like_a_boss_btxlne.png',
  },
]

const MemoryMatrixWinOrLose = props => {
  const {win, stroke, level, restartGame} = props
  const onClickGame = () => {
    restartGame(level)
  }
  return (
    <div className="matrix-win-lose-bg-container">
      {win && level === 15 ? (
        <div>
          <div>
            <div className="matrix-win-emojis">
              {emojisArray.map(each => (
                <img
                  alt={each.id}
                  src={each.imageUrl}
                  className="matrix-win-each-emoji"
                />
              ))}
              <Line
                percent={stroke}
                strokeWidth={3}
                strokeColor="#467AFF"
                className="line-height"
              />
              <div className="level-container">
                <p>Level 1</p>
                <p>Level 5</p>
                <p>Level 10</p>
                <p>Level 15</p>
              </div>
            </div>
            <h1 className="matrix-congratulations-text">Congratulations</h1>
            <p className="matrix-para-text">You have reached level 15</p>
            <button
              type="button"
              className="matrix-button"
              onClick={onClickGame}
            >
              Play Again
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="matrix-win-emojis">
            {emojisArray.map(each => (
              <img
                alt={each.id}
                src={each.imageUrl}
                className="matrix-win-each-emoji"
              />
            ))}
            <Line
              percent={stroke}
              strokeWidth={3}
              strokeColor="#467AFF"
              className="line-height"
            />
            <div className="level-container">
              <p>Level 1</p>
              <p>Level 5</p>
              <p>Level 10</p>
              <p>Level 15</p>
            </div>
          </div>
          <h1 className="matrix-congratulations-text">Congratulations</h1>
          <p className="matrix-para-text">You have reached level {level}</p>
          <button type="button" className="matrix-button" onClick={onClickGame}>
            Play Again
          </button>
        </div>
      )}
    </div>
  )
}
export default MemoryMatrixWinOrLose
