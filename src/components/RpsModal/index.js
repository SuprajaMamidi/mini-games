import './index.css'
import React from 'react'
import Modal from 'react-modal'
import {CgClose} from 'react-icons/cg'

class RpsModal extends React.Component {
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
          className="rps-modal-button"
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
            <h2 className="rps-rules-heading-popup">Rules</h2>
            <div className="rps-list-container-popup">
              <ul>
                <li className="rps-list-item">
                  The game result should be based on user and user opponent
                  choices
                </li>
                <li>
                  When the user choice is rock and his opponent choice is rock
                  then the result will be{' '}
                  <span className="rps-rules-span">IT IS DRAW</span>
                </li>
                <li>
                  When the user choice is paper and his opponent choice is rock
                  then the result will be{' '}
                  <span className="rps-rules-span">YOU WON</span>
                </li>
                <li>
                  When the user choice is a scissor and his opponent choice is
                  rock then the result will be{' '}
                  <span className="rps-rules-span">YOU LOSE</span>
                </li>
                <li>
                  When the user choice is paper and his opponent choice is paper
                  then the result will be{' '}
                  <span className="rps-rules-span">IT IS DRAW</span>
                </li>
                <li>
                  When the user choice is scissors and his opponent choice is
                  paper then the result will be{' '}
                  <span className="rps-rules-span">YOU WON</span>
                </li>
              </ul>
              <ul>
                <li>
                  When the user choice is rock and his opponent choice is
                  scissors then the result will be{' '}
                  <span className="rps-rules-span">YOU WON</span>
                </li>
                <li>
                  When the user choice is paper and his opponent choice is
                  scissors then the result will be{' '}
                  <span className="rps-rules-span">YOU LOSE</span>
                </li>
                <li>
                  When the user choice is scissors and his opponent choice is
                  scissors then the result will be{' '}
                  <span className="rps-rules-span">IT IS DRAW</span>
                </li>
                <li>
                  When the result is{' '}
                  <span className="rps-rules-span">YOU WON</span>, then the
                  count of the score should be incremented by 1
                </li>
                <li>
                  When the result is{' '}
                  <span className="rps-rules-span">IT IS DRAW</span>, then the
                  count of the score should be the same
                </li>
                <li>
                  When the result is{' '}
                  <span className="rps-rules-span">YOU LOSE</span>, then the
                  count of the score should be decremented by 1.
                </li>
              </ul>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}
export default RpsModal
