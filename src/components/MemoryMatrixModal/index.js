import './index.css'
import React from 'react'
import Modal from 'react-modal'
import {CgClose} from 'react-icons/cg'

class MemoryMatrixModal extends React.Component {
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
          className="memory-modal-button"
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
                <li className="memory-rules-text-1">
                  In each level of the Game, Users should be able to see the
                  Grid with (N X N) size starting from 3 and the grid will
                  highlight N cells in Blue, the N highlighted cells will be
                  picked randomly.
                </li>
                <li className="memory-rules-text-1">
                  The highlighted cells will remain N seconds for the user to
                  memorize the cells. At this point, the user should not be able
                  to perform any action.
                </li>
                <li className="memory-rules-text-1">
                  After N seconds, the grid will clear the N highlighted cells.
                </li>
              </ul>
              <ul>
                <li className="memory-rules-text-2">
                  At N seconds, the user can click on any cell. Clicking on a
                  cell that was highlighted before it will turn blue. Clicking
                  on the other cells that were not highlighted before then will
                  turn to red.
                </li>
                <li className="memory-rules-text-2">
                  The user should be promoted to the next level if they guess
                  all N cells correctly in one attempt.
                </li>
                <li className="memory-rules-text-2">
                  The user should be taken to the results page if the user
                  clicks on the wrong cell.
                </li>
                <li className="memory-rules-text-2">
                  If the user completed all the levels, then the user should be
                  taken to the results page.
                </li>
              </ul>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}
export default MemoryMatrixModal
