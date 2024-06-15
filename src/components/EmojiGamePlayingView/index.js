import {Component} from 'react'

import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'

import EmojiCard from '../EmojiCard'
import EmojiWinOrLose from '../EmojiWinOrLose'
import EmojiModal from '../EmojiModal'

import './index.css'

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

class EmojiGamePlayingView extends Component {
  state = {
    clickedEmojisList: [],
    isGameInProgress: true,
    score: 0,
  }

  resetGame = () => {
    this.setState({clickedEmojisList: [], isGameInProgress: true})
  }

  renderScorecard = () => {
    const {clickedEmojisList} = this.state
    const isWon = clickedEmojisList.length === emojisList.length

    return (
      <EmojiWinOrLose
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickedEmojisList.length}
      />
    )
  }

  finishGame = () => {
    const {score} = this.state
    this.setState({score, isGameInProgress: false})
  }

  clickEmoji = id => {
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisListLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGame(clickedEmojisListLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisListLength) {
        this.finishGame(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
        score: prevState.score + 1,
      }))
    }
  }

  getShuffledEmojisList = () => emojisList.sort(() => Math.random() - 0.5)

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <ul className="unordered-list-emojis">
        {shuffledEmojisList.map(emojiObject => (
          <EmojiCard
            key={emojiObject.id}
            emojiDetails={emojiObject}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {score, isGameInProgress} = this.state

    return (
      <div className="bg-container">
        <nav className="nav">
          <div className="emoji-logo-container">
            <img
              src="https://res.cloudinary.com/dh5eg8uvp/image/upload/v1711966914/Logo_v6xiua.png"
              alt="emoji logo"
              className="emoji-logo"
            />
            <h1 className="emoji-logo-heading">Emoji Game</h1>
          </div>

          {isGameInProgress && (
            <p className="emoji-score">
              Score: <span className="emoji-score-span">{score}</span>
            </p>
          )}
        </nav>
        {isGameInProgress ? (
          <div className="emoji-top-container">
            <Link to="/">
              <button className="back-btn" type="button">
                <BiArrowBack className="left-icon" />
                Back
              </button>
            </Link>
            <div className="emoji-popup">
              <EmojiModal />
            </div>
          </div>
        ) : null}
        <div className="emojis-div-container">
          {isGameInProgress ? this.renderEmojisList() : this.renderScorecard()}
        </div>
      </div>
    )
  }
}

export default EmojiGamePlayingView
