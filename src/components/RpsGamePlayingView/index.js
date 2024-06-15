import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import RpsModal from '../RpsModal'
import RpsImageItem from '../RpsImageItem'

import './index.css'

const choicesList = [
  {
    id: 'rock',
    imageUrl:
      'https://res.cloudinary.com/dh5eg8uvp/image/upload/v1712045542/Group_7600_y5tqbk.png',
  },
  {
    id: 'scissor',
    imageUrl:
      'https://res.cloudinary.com/dh5eg8uvp/image/upload/v1712045624/Group_7598_gq7hkx.png',
  },
  {
    id: 'paper',
    imageUrl:
      'https://res.cloudinary.com/dh5eg8uvp/image/upload/v1712045598/Group_6943_sys20j.png',
  },
]

class RpsGamePlayingView extends Component {
  state = {
    showResult: false,
    myChoice: {},
    opponentChoice: {},
    score: 0,
    resultMessage: '',
  }

  onGetButtonId = (id, image) => {
    const number = Math.floor(Math.random() * choicesList.length)

    const opponentChoice = choicesList[number]

    let resultMessage = ''
    let scoreChange = 0

    if (
      (opponentChoice.id === 'rock' && id === 'scissor') ||
      (opponentChoice.id === 'scissor' && id === 'paper') ||
      (opponentChoice.id === 'paper' && id === 'rock')
    ) {
      resultMessage = 'YOU LOSE'
      scoreChange = -1
    } else if (
      (opponentChoice.id === 'rock' && id === 'paper') ||
      (opponentChoice.id === 'scissor' && id === 'rock') ||
      (opponentChoice.id === 'paper' && id === 'scissor')
    ) {
      resultMessage = 'YOU WON'
      scoreChange = 1
    } else {
      resultMessage = 'IT IS DRAW'
    }

    this.setState(prevState => ({
      showResult: true,
      myChoice: {id, image},
      opponentChoice,
      score: prevState.score + scoreChange,
      resultMessage,
    }))
  }

  onGetImages = () => (
    <div className="rps-bg-container">
      <div className="rps-top-containers">
        <Link to="/">
          <button className="rps-back-button-container" type="button">
            <BiArrowBack />
            Back
          </button>
        </Link>
        <RpsModal />
      </div>
      <div>
        <h1 className="rps-heading-top">ROCK PAPER SCISSOR</h1>
        <h2 className="rps-heading-bottom">Let’s pick</h2>

        <div className="rps-image-container">
          {choicesList.map(eachItem => (
            <RpsImageItem
              key={eachItem.id}
              buttonDetails={eachItem}
              onGetId={this.onGetButtonId}
            />
          ))}
        </div>
      </div>
    </div>
  )

  onGetResult = () => {
    const {myChoice, opponentChoice, resultMessage, score} = this.state

    const onClickPlayAgain = () => {
      this.setState({showResult: false})
    }

    let emojiImage
    let bottomImage
    let altText
    let altBottomText
    if (resultMessage === 'YOU WON') {
      emojiImage =
        'https://res.cloudinary.com/dh5eg8uvp/image/upload/v1712376699/Smliing_Emoji_Icon_688b57c3-ccff-4619-b1ac-a0e6edf7b665_large_hkbhqa.png'
      bottomImage =
        'https://res.cloudinary.com/dh5eg8uvp/image/upload/v1712378509/star-struck-emoji-512x493-1yrqik36_y4rop0.png'
      altText = 'won emoji'
      altBottomText = 'Smiling face with star eyes'
    } else if (resultMessage === 'YOU LOSE') {
      emojiImage =
        'https://e7.pngegg.com/pngimages/611/150/png-clipart-yellow-sad-emoji-illustration-face-with-tears-of-joy-emoji-sadness-iphone-emoticon-sad-computer-wallpaper-smiley.png'
      bottomImage =
        'https://res.cloudinary.com/dh5eg8uvp/image/upload/c_crop,w_250,h_188,ar_4:3,g_auto/v1712380348/5f6f2dcb72fa9f0f885da8bf96f481f3_reoh0q.jpg'
      altText = 'lose emoji'
      altBottomText = 'Face without mouth'
    } else {
      emojiImage =
        'https://res.cloudinary.com/dh5eg8uvp/image/upload/c_crop,ar_4:3/v1712379730/sad-emoji-face-classic-flat-style-icon-vector-32612593_beyv9w.jpg'
      bottomImage =
        'https://res.cloudinary.com/dh5eg8uvp/image/upload/v1712379949/face-without-mouth_cvradn.jpg'
      altText = 'draw emoji'
      altBottomText = 'Face without mouth'
    }

    let opponentAlt = ''
    if (opponentChoice.id === 'rock') {
      opponentAlt = 'rock'
    } else if (opponentChoice.id === 'paper') {
      opponentAlt = 'paper'
    } else {
      opponentAlt = 'scissor'
    }

    return (
      <div className="rps-bg-result-container">
        <h1 className="rps-heading-result">Rock Paper Scissor</h1>
        <div className="rps-result-top-view">
          <div className="rps-top-text-container">
            <h2 className="rps-top-text-desktop">
              ROCK <br /> PAPER <br /> SCISSOR
            </h2>
            <div className="rps-top-text-container">
              <p className="rps-top-text-mobile">ROCK</p>
              <p className="rps-top-text-mobile">PAPER</p>
              <p className="rps-top-text-mobile">SCISSOR</p>
            </div>
          </div>

          <div className="rps-bg-top-image">
            <img
              src={emojiImage}
              className="won-emoji-image-result"
              alt={altText}
            />
          </div>
          <div className="rps-score-container">
            <p className="rps-score-text">Score</p>
            <p className="rps-score-text-display">{score}</p>
          </div>
        </div>

        <div className="rps-you-opponent-container">
          <p className="rps-you-text">You</p>
          <p className="rps-opponent-text">Opponent</p>
        </div>
        <div className="rps-result-bottom-view">
          <img
            src={myChoice.image}
            className="rps-myChoice-image"
            alt={myChoice.id}
          />
          <div className="score-result-message-container">
            <img
              src={bottomImage}
              className="rps-bottom-image"
              alt={altBottomText}
            />
            <p className="score-result-message">{resultMessage}</p>
            <button
              type="button"
              onClick={onClickPlayAgain}
              className="rps-play-again-button"
            >
              Play Again
            </button>
          </div>
          <img
            src={opponentChoice.imageUrl}
            className="rps-opponentChoice-image"
            alt={opponentAlt}
          />
        </div>
      </div>
    )
  }

  render() {
    const {showResult} = this.state
    return <>{showResult ? this.onGetResult() : this.onGetImages()}</>
  }
}
export default RpsGamePlayingView
