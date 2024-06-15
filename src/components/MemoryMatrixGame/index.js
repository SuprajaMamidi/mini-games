import {Link} from 'react-router-dom'
import {Component} from 'react'

import {BiArrowBack} from 'react-icons/bi'
import MemoryMatrixGamePlayingView from '../MemoryMatrixGamePlayingView'

import './index.css'

class MemoryMatrixGame extends Component {
  state = {gameView: false}

  renderRulesView = () => (
    <div className="memory-rules-bg-container">
      <Link to="/">
        <button className="memory-back-btn" type="button">
          <BiArrowBack className="memory-left-icon" />
          Back
        </button>
      </Link>
      <div className="memory-rules-top-container">
        <h2 className="memory-rules-top-heading">Memory Matrix</h2>
        <img
          src="https://res.cloudinary.com/dh5eg8uvp/image/upload/v1712478878/memory_uccxc4.png"
          alt="memory matrix"
          className="memory-rules-image"
        />
      </div>
      <h1 className="memory-rules-heading">Rules</h1>
      <div className="memory-rules-text-container">
        <ul>
          <li>
            In each level of the Game, Users should be able to see the Grid with
            (N X N) size starting from 3 and the grid will highlight N cells in
            Blue, the N highlighted cells will be picked randomly.
          </li>
          <li>
            The highlighted cells will remain N seconds for the user to memorize
            the cells. At this point, the user should not be able to perform any
            action.
          </li>
          <li>After N seconds, the grid will clear the N highlighted cells.</li>
        </ul>
        <ul>
          <li>
            At N seconds, the user can click on any cell. Clicking on a cell
            that was highlighted before it will turn blue. Clicking on the other
            cells that were not highlighted before then will turn to red.
          </li>
          <li>
            The user should be promoted to the next level if they guess all N
            cells correctly in one attempt.
          </li>
          <li>
            The user should be taken to the results page if the user clicks on
            the wrong cell.
          </li>
          <li>
            If the user completed all the levels, then the user should be taken
            to the results page.
          </li>
        </ul>
      </div>
      <button
        type="button"
        className="memory-rules-button"
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
      <>{gameView ? <MemoryMatrixGamePlayingView /> : this.renderRulesView()}</>
    )
  }
}

export default MemoryMatrixGame
