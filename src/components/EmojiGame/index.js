import {Component} from 'react'
import {Link} from 'react-router-dom'

import {BiArrowBack} from 'react-icons/bi'
import EmojiGamePlayingView from '../EmojiGamePlayingView'

import './index.css'

class EmojiGame extends Component {
  state = {gameView: false}

  renderEmojiRulesView = () => (
    <div className="emoji-bg-container">
      <Link to="/">
        <button className="back-btn" type="button">
          <BiArrowBack className="left-icon" type="button" />
          Back
        </button>
      </Link>

      <div className="emoji-rules-card">
        <div className="inner-card">
          <div>
            <img
              src="https://res.cloudinary.com/dh5eg8uvp/image/upload/v1711893066/Group_7471_pp5at8.png"
              alt="Emoji Game"
              className="emoji-image"
            />
          </div>
          <div className="rules-container">
            <h1 className="rules-heading">Rules</h1>
            <ul className="unordered-list">
              <li className="list-items">
                User should be able to see the list of Emojis
              </li>
              <li className="list-items">
                When the user clicks any one of the Emoji for the first time,
                then the count of the score should be incremented by 1 and the
                list of emoji cards should be shuffled.
              </li>
              <li className="list-items">
                This process should be repeated every time the user clicks on an
                emoji card
              </li>
              <li className="list-items">
                When the user Clicks on all Emoji cards without clicking any of
                it twice, then the user will win the game
              </li>
              <li className="list-items">
                When the user clicks on the same Emoji for the second time, then
                the user will lose the game.
              </li>
              <li className="list-items">
                Once the game is over, the user will be redirected to the
                results page.
              </li>
            </ul>

            <div className="btn-container">
              <button
                className="btn"
                type="button"
                onClick={this.onClickButton}
              >
                Start playing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  onClickButton = () => {
    this.setState(prevState => ({gameView: !prevState.gameView}))
  }

  render() {
    const {gameView} = this.state
    return (
      <>{gameView ? <EmojiGamePlayingView /> : this.renderEmojiRulesView()}</>
    )
  }
}
export default EmojiGame
