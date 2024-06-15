import './index.css'
import React from 'react'
import Modal from 'react-modal'
import {CgClose} from 'react-icons/cg'

class EmojiModal extends React.Component {
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
          className="emoji-modal-button"
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
            <h1 className="rules-heading">Rules</h1>
            <ul>
              <li className="emoji-list-item-popup">
                User should be able to see the list of Emojis
              </li>
              <li className="emoji-list-item-popup">
                When the user clicks any one of the Emoji for the first time,
                then the count of the score should be incremented by 1 and the
                list of emoji cards should be shuffled.
              </li>
              <li className="emoji-list-item-popup">
                This process should be repeated every time the user clicks on an
                emoji card
              </li>
              <li className="emoji-list-item-popup">
                When the user Clicks on all Emoji cards without clicking any of
                it twice, then the user will win the game
              </li>
              <li className="emoji-list-item-popup">
                When the user clicks on the same Emoji for the second time, then
                the user will lose the game.
              </li>
              <li className="emoji-list-item-popup">
                Once the game is over, the user will be redirected to the
                results page.
              </li>
            </ul>
          </div>
        </Modal>
      </div>
    )
  }
}
export default EmojiModal
