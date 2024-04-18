import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import MemoryMatrix from './components/MemoryMatrix'
import MatrixHomePage from './components/MatrixHomePage'
import RockPaperHomePage from './components/RockPaperHomePage'
import RockPaperGame from './components/RockPaperGame'
import EmojiHome from './components/EmojiHome'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/memory-matrix" component={MatrixHomePage} />
    <Route exact path="/matrix/game" component={MemoryMatrix} />
    <Route exact path="/rock-paper-scissor" component={RockPaperHomePage} />
    <Route exact path="/rock/paper/game" component={RockPaperGame} />
    <Route exact path="/emoji-game" component={EmojiHome} />
  </Switch>
)

export default App
