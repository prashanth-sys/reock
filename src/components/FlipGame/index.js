import {Component} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import FlipRules from '../FlipRules'
import FlipImages from '../FlipImages'
import './index.css'

const cardsData = [
  {
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
  {
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },
  {
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
  {
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },
]

class FlipGame extends Component {
  state = {
    isModelOpen: false,
    flippedCards: {},
  }

  onClickFlipImage = name => {
    this.setState(prevState => ({
      flippedCards: {
        ...prevState.flippedCards,
        [name]: !prevState.flippedCards[name],
      },
    }))
  }

  toggleModal = () => {
    this.setState(prevState => ({
      isModelOpen: !prevState.isModelOpen,
    }))
  }

  render() {
    const {isModelOpen, flippedCards} = this.state
    return (
      <div className="flip-game-bg-container">
        <div className="flip-rules-content">
          <div className="flip-game-button">
            <Link to="/card-flip-memory-game" className="link">
              <button className="flip-game-back-button" type="button">
                <BiArrowBack className="icon" />
                <p>Back</p>
              </button>
            </Link>
          </div>
          <FlipRules isOpen={isModelOpen} onClose={this.toggleModal} />
          <div className="flip-rules-button-container">
            <button
              className="flip-rules-button"
              type="button"
              onClick={this.toggleModal}
            >
              Rules
            </button>
          </div>
        </div>
        <h1 className="flip-game-heading">Card-Flip Memory Game</h1>
        <div className="flip-level-time-container">
          <p className="level">Card flip count - 00</p>
          <p className="level">Timer</p>
          <p className="level">Score - 00</p>
        </div>
        <div className="flip-card">
          <ul className="flip-image-list">
            {cardsData.map(eachItem => (
              <FlipImages
                key={eachItem.name}
                list={eachItem}
                isClicked={flippedCards[eachItem.name]}
                onClickFlipImage={this.onClickFlipImage}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default FlipGame
