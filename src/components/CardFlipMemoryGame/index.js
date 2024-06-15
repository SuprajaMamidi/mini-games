import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'

import './index.css'
import CardFlipMemoryGamePlayingView from '../CardFlipMemoryGamePlayingView'

class CardFlipMemoryGame extends Component {
  state = {gameView: false}

  renderFlipMemoryView = () => (
    <div className="flip-memory-rules-bg-container">
      <Link to="/">
        <button className="flip-memory-rules-back-btn" type="button">
          <BiArrowBack className="memory-left-icon" />
          Back
        </button>
      </Link>
      <div className="memory-rules-top-container">
        <img
          src="https://res.cloudinary.com/dh5eg8uvp/image/upload/v1712674051/animals_pxrhmm.png"
          alt="card flip memory game"
          className="flip-memory-image"
        />
      </div>
      <h1 className="memory-rules-heading">Rules</h1>
      <div className="flip-memory-rules-text-container">
        <ul>
          <li>
            When the game is started, the users should be able to see the list
            of Cards that are shuffled and turned face down.
          </li>
          <li>
            When a user starts the game, the user should be able to see the
            Timer running.
          </li>
          <li>The Timer starts from 2 Minutes.</li>
          <li>
            If the two cards have the same image, they remain face up. If not,
            they should be flipped face down again after a short 2 seconds.
          </li>
        </ul>
        <ul>
          <li>Users should be able to compare only two cards at a time.</li>
          <li>
            When the user is not able to find all the cards before the timer
            ends then the game should end and redirect to the Time Up Page.
          </li>
          <li>
            If the user finds all the matching cards before the timer ends, then
            the user should be redirected to the results page.
          </li>
        </ul>
      </div>
      <button
        type="button"
        className="flip-memory-rules-button"
        onClick={this.onClickButton}
      >
        Start playing
      </button>
    </div>
  )

  onClickButton = () => {
    this.setState(prevState => ({gameView: !prevState.gameView}))
  }

  render() {
    const {gameView} = this.state
    return (
      <>
        {gameView ? (
          <CardFlipMemoryGamePlayingView />
        ) : (
          this.renderFlipMemoryView()
        )}
      </>
    )
  }
}
export default CardFlipMemoryGame
