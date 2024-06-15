import './index.css'
import React from 'react'
import Modal from 'react-modal'
import {CgClose} from 'react-icons/cg'

class CardFlipMemoryModal extends React.Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal() {
    this.setState({showModal: true})
  }

  handleCloseModal() {
    this.setState({showModal: false})
  }

  render() {
    const {showModal} = this.state
    return (
      <div>
        <button
          onClick={this.handleOpenModal}
          className="flip-memory-modal-button"
          type="button"
        >
          Rules
        </button>

        <Modal isOpen={showModal} contentLabel="Minimal Modal Example">
          <div className="emoji-modal-popup">
            <div className="emoji-modal-closebutton-container">
              <button
                onClick={this.handleCloseModal}
                className="emoji-modal-closebutton"
                data-testid="close"
                type="button"
              >
                <CgClose />
              </button>
            </div>
            <h1 className="memory-rules-heading-popup">Rules</h1>
            <div className="memory-rules-text-container-popup">
              <ul>
                <li className="flip-memory-rules-text">
                  When the game is started, the users should be able to see the
                  list of Cards that are shuffled and turned face down.
                </li>
                <li className="flip-memory-rules-text">
                  When a user starts the game, the user should be able to see
                  the Timer running.
                </li>
                <li className="flip-memory-rules-text">
                  The Timer starts from 2 Minutes.
                </li>
                <li className="flip-memory-rules-text">
                  If the two cards have the same image, they remain face up. If
                  not, they should be flipped face down again after a short 2
                  seconds.
                </li>
              </ul>
              <ul>
                <li className="flip-memory-rules-text">
                  Users should be able to compare only two cards at a time.
                </li>
                <li className="flip-memory-rules-text">
                  When the user is not able to find all the cards before the
                  timer ends then the game should end and redirect to the Time
                  Up Page.
                </li>
                <li className="flip-memory-rules-text">
                  If the user finds all the matching cards before the timer
                  ends, then the user should be redirected to the results page.
                </li>
              </ul>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}
export default CardFlipMemoryModal
