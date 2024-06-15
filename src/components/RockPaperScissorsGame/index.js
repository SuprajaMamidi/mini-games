import {Link} from 'react-router-dom'
import {Component} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import RpsGamePlayingView from '../RpsGamePlayingView'

import './index.css'

class RockPaperScissorsGame extends Component {
  state = {gameView: false}

  renderRpsRulesView = () => (
    <div className="rps-bg-container-rules">
      <Link to="/">
        <button className="rps-back-button-container" type="button">
          <BiArrowBack />
          Back
        </button>
      </Link>
      <div className="rps-top-container">
        <p className="rps-heading">ROCK PAPER SCISSOR</p>
        <img
          src="https://res.cloudinary.com/dh5eg8uvp/image/upload/v1712039547/Group_7469_djaote.png"
          alt="rock paper scissor"
          className="rps-rules-image"
        />
      </div>
      <div>
        <h1 className="rps-rules-heading">Rules</h1>
        <div className="rps-list-container">
          <ul>
            <li className="rps-list-item">
              The game result should be based on user and user opponent choices
            </li>
            <li>
              When the user choice is rock and his opponent choice is rock then
              the result will be{' '}
              <span className="rps-rules-span">IT IS DRAW</span>
            </li>
            <li>
              When the user choice is paper and his opponent choice is rock then
              the result will be <span className="rps-rules-span">YOU WON</span>
            </li>
            <li>
              When the user choice is a scissor and his opponent choice is rock
              then the result will be{' '}
              <span className="rps-rules-span">YOU LOSE</span>
            </li>
            <li>
              When the user choice is paper and his opponent choice is paper
              then the result will be{' '}
              <span className="rps-rules-span">IT IS DRAW</span>
            </li>
            <li>
              When the user choice is scissors and his opponent choice is paper
              then the result will be{' '}
              <span className="rps-rules-span">YOU WON</span>
            </li>
          </ul>
          <ul>
            <li>
              When the user choice is rock and his opponent choice is scissors
              then the result will be{' '}
              <span className="rps-rules-span">YOU WON</span>
            </li>
            <li>
              When the user choice is paper and his opponent choice is scissors
              then the result will be{' '}
              <span className="rps-rules-span">YOU LOSE</span>
            </li>
            <li>
              When the user choice is scissors and his opponent choice is
              scissors then the result will be{' '}
              <span className="rps-rules-span">IT IS DRAW</span>
            </li>
            <li>
              When the result is <span className="rps-rules-span">YOU WON</span>
              , then the count of the score should be incremented by 1
            </li>
            <li>
              When the result is{' '}
              <span className="rps-rules-span">IT IS DRAW</span>, then the count
              of the score should be the same
            </li>
            <li>
              When the result is{' '}
              <span className="rps-rules-span">YOU LOSE</span>, then the count
              of the score should be decremented by 1.
            </li>
          </ul>
        </div>

        <button
          className="rps-rules-button"
          type="button"
          onClick={this.onClickButton}
        >
          start playing
        </button>
      </div>
    </div>
  )

  onClickButton = () => {
    this.setState(prevState => ({gameView: !prevState.gameView}))
  }

  render() {
    const {gameView} = this.state
    return <>{gameView ? <RpsGamePlayingView /> : this.renderRpsRulesView()}</>
  }
}
export default RockPaperScissorsGame
