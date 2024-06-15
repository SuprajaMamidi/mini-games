import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import CardFlipMemoryCardItem from '../CardFlipMemoryCardItem'
import CardFlipMemoryModal from '../CardFlipMemoryModal'
import CardFlipWinOrLose from '../CardFlipWinOrLose'

import './index.css'

const cardsData = [
  {
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
    matched: false,
  },
  {
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
    matched: false,
  },
  {
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
    matched: false,
  },
  {
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
    matched: false,
  },
  {
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
    matched: false,
  },
  {
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
    matched: false,
  },
  {
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
    matched: false,
  },
  {
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
    matched: false,
  },
  {
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
    matched: false,
  },
  {
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
    matched: false,
  },
]

function CardFlipMemoryGamePlayingView() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [stopFlip, setStopFlip] = useState(false)

  const [score, setScore] = useState(0)
  const [minutes, setMinutes] = useState(2)
  const [seconds, setSeconds] = useState(0)
  const [isTrue, setIsTrue] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 0 && minutes === 0) {
        clearInterval(interval)
        setIsTrue(true)
      } else if (seconds === 0) {
        setMinutes(prevMinutes => prevMinutes - 1)
        setSeconds(59)
      } else {
        setSeconds(prevSeconds => prevSeconds - 1)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [seconds, minutes])

  // shufled cards

  const shuffleCards = () => {
    setTimeout(() => {
      const shuffledCards = [...cardsData, ...cardsData]
        .sort(() => Math.random() - 0.5)
        .map(card => ({...card, id: Math.random()}))

      setCards(shuffledCards)
      setTurns(0)
      setChoiceOne(null)
      setChoiceTwo(null)
      setScore(0)
      setIsTrue(false)
      setMinutes(2)
      setSeconds(0)
    })
  }

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setStopFlip(false)
    setTurns(prevTurns => prevTurns + 1)
  }

  // handle a choice
  const handleChoice = card => {
    // Check if the clicked card is already one of the choices
    if (card === choiceOne || card === choiceTwo) {
      return // Do nothing if the same card is clicked twice
    }

    if (choiceOne) {
      setChoiceTwo(card)
    } else {
      setChoiceOne(card)
    }
  }
  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setStopFlip(true)
      if (choiceOne.name === choiceTwo.name) {
        setCards(prevCards =>
          prevCards.map(card => {
            if (card.name === choiceOne.name) {
              return {...card, matched: true}
            }
            return card
          }),
        )
        setTurns(prevTurns => prevTurns + 1)
        setScore(prevState => prevState + 1)

        resetTurn()
      } else {
        setTurns(prevTurns => prevTurns + 1)
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  useEffect(() => {
    shuffleCards()
  }, [])

  const renderFlipMemoryGameview = () => (
    <div className='flip-memory-bg-container'>
      <div className='flip-memory-top-container'>
        <Link to='/'>
          <button className='flip-memory-back-btn' type='button'>
            <BiArrowBack className='memory-left-icon' />
            Back
          </button>
        </Link>
        <div className='emoji-popup'>
          <CardFlipMemoryModal />
        </div>
      </div>
      <h1 className='flip-memory-heading'>Card-Flip Memory Game</h1>
      <div className='flip-memory-text-container-overall'>
        {seconds < 10 ? (
          <p className='flip-timer-mobile'>{`0${minutes}:0${seconds}`}</p>
        ) : (
          <p className='flip-timer-mobile'>{`0${minutes}:${seconds}`}</p>
        )}
        <div className='flip-memory-text-container'>
          {turns < 10 && seconds > 0 ? (
            <p>Card flip count - 0{turns}</p>
          ) : (
            <p>Card flip count - {turns}</p>
          )}
          {seconds < 10 ? (
            <p className='flip-timer'>{`0${minutes}:0${seconds}`}</p>
          ) : (
            <p className='flip-timer'>{`0${minutes}:${seconds}`}</p>
          )}

          {score < 10 && seconds > 0 ? (
            <p>Score - 0{score}</p>
          ) : (
            <p>Score - {score}</p>
          )}
        </div>
        <div className='flip-memory-box-container'>
          {cards.map(card => (
            <CardFlipMemoryCardItem
              key={card.id}
              cardDetails={card}
              handleChoice={handleChoice}
              testid='cardsData'
              flipped={
                card === choiceOne ||
                card === choiceTwo ||
                card.matched === true
              }
              stopflip={stopFlip}
            />
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <>
      {isTrue || score === 10 ? (
        <CardFlipWinOrLose
          score={score}
          setIsTrue={isTrue}
          setTurns={turns}
          shuffleCards={shuffleCards}
        />
      ) : (
        renderFlipMemoryGameview()
      )}
    </>
  )
}
export default CardFlipMemoryGamePlayingView
