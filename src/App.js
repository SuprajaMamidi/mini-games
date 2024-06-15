import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import CardFlipMemoryGame from './components/CardFlipMemoryGame'
import EmojiGame from './components/EmojiGame'
import MemoryMatrixGame from './components/MemoryMatrixGame'
import RockPaperScissorsGame from './components/RockPaperScissorsGame'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/emoji-game" component={EmojiGame} />

    <Route exact path="/memory-matrix" component={MemoryMatrixGame} />
    <Route exact path="/rock-paper-scissor" component={RockPaperScissorsGame} />
    <Route exact path="/card-flip-memory-game" component={CardFlipMemoryGame} />
  </Switch>
)

export default App
