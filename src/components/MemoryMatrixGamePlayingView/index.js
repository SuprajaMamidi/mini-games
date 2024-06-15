import {useState, useEffect, useCallback} from 'react'
import {v4 as uuidv4} from 'uuid'
import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import MemoryMatrixCard from '../MemoryMatrixCard'
import MemoryMatrixModal from '../MemoryMatrixModal'
import MemoryMatrixWinOrLose from '../MemoryMatrixWinOrLose'

import './index.css'

const initialLevel = 1
const initialN = 3

function MemoryMatrixGamePlayingView() {
  const [level, setLevel] = useState(initialLevel)
  const [n, setN] = useState(initialN)
  const [gridSize, setGridSize] = useState(0)
  const [highlightedBoxes, setHighlightedBoxes] = useState([])
  const [selectedBoxes, setSelectedBoxes] = useState([])
  const [isClickable, setIsClickable] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [stroke, setStroke] = useState(0)

  const updateGridSize = useCallback(() => {
    setGridSize(n * n)
  }, [n])

  const handleCellClick = id => {
    if (!isClickable) return

    if (highlightedBoxes.includes(id)) {
      if (!selectedBoxes.includes(id)) {
        setSelectedBoxes(prevState => [...prevState, id])
        if (selectedBoxes.length === highlightedBoxes.length - 1) {
          setTimeout(() => {
            if (selectedBoxes.length === highlightedBoxes.length - 1) {
              // Proceed to next level if all highlighted boxes are clicked
              if (level === 15) {
                setGameOver(true) // End of the game
              } else {
                // Proceed to next level
                setLevel(prevLevel => prevLevel + 1)
                setN(prevState => prevState + 1)
                // Start next level
              }
            } else {
              // Game over if user clicked on wrong box
              setGameOver(true)
            }
          }, 1000)
        }
      }
    } else {
      // Game over if user clicked on wrong box
      setGameOver(true)
    }
  }

  const grid = () => {
    const arrays = Array(gridSize)
      .fill()
      .map((_, index) => (
        <MemoryMatrixCard
          key={uuidv4}
          id={index}
          highlightedBoxes={
            isClickable ? false : highlightedBoxes.includes(index)
          }
          isClickable={isClickable}
          handleClick={handleCellClick}
          selected={selectedBoxes.includes(index)}
          wrong={
            selectedBoxes.includes(index) && !highlightedBoxes.includes(index)
          }
        />
      ))
    return arrays
  }

  const highlightRandomCells = useCallback(() => {
    const newHighlightedBoxes = []
    const cellsCount = level + 2 // Increase highlighted cells by one for every level
    while (newHighlightedBoxes.length < cellsCount) {
      const setNewHighlightedBoxes = Math.floor(Math.random() * (n * n))
      if (!newHighlightedBoxes.includes(setNewHighlightedBoxes)) {
        newHighlightedBoxes.push(setNewHighlightedBoxes)
      }
    }
    return newHighlightedBoxes
  }, [level, n])

  const startGame = useCallback(() => {
    const newHighlightedBoxes = highlightRandomCells()
    setHighlightedBoxes(newHighlightedBoxes)
    setSelectedBoxes([])
    setIsClickable(false)
  }, [highlightRandomCells])

  const restartGame = () => {
    setGameOver(false)
    setLevel(level)
    setN(level + 2) // Adjust the level logic as needed
    startGame()
  }

  useEffect(() => {
    startGame()
  }, [level, startGame])

  useEffect(() => {
    updateGridSize()
    setStroke(prevState => prevState + 5)
  }, [n, updateGridSize])

  useEffect(() => {
    if (!isClickable) {
      const timer = setTimeout(() => {
        setIsClickable(true)
      }, n * 1000)

      return () => clearTimeout(timer)
    }
    return undefined
  }, [isClickable, n])

  const matrixGamePlayingView = () => (
    <div className="memory-main-bg-container">
      <div className="rps-top-containers">
        <Link to="/">
          <button className="memory-back-button-container" type="button">
            <BiArrowBack />
            Back
          </button>
        </Link>
        <MemoryMatrixModal />
      </div>
      <div className="memory-game-view-container">
        <h1 className="memory-heading">Memory Matrix</h1>
        <p className="memory-level-heading">Level - {level}</p>

        <div className={`empty-block-grid level-${level}`}>{grid()}</div>
      </div>
    </div>
  )

  return (
    <>
      {gameOver ? (
        <MemoryMatrixWinOrLose
          restartGame={restartGame}
          level={level}
          win={false}
          stroke={stroke}
        />
      ) : (
        matrixGamePlayingView()
      )}
    </>
  )
}

export default MemoryMatrixGamePlayingView
