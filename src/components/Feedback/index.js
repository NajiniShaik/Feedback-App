import {Component} from 'react'

import EmojiItems from '../Emojis'

import './index.css'

class Feedback extends Component {
  state = {
    isClicked: false,
  }

  updateValue = value => {
    this.setState({isClicked: value})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    const {isClicked} = this.state

    const emojiCard = () => (
      <div className="card">
        <h1 className="title">
          How satisfied are you with our customer support performance?
        </h1>

        <ul className="emojis-list">
          {emojis.map(eachEmoji => (
            <EmojiItems
              updateValue={this.updateValue}
              emojiDetails={eachEmoji}
              key={eachEmoji.id}
            />
          ))}
        </ul>
      </div>
    )

    const greetingCard = () => (
      <div className="card">
        <img src={loveEmojiUrl} alt="love emoji" className="greeting-icon" />
        <h1 className="title">Thank you!</h1>
        <p className="greetings">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )

    return (
      <div className="bg-container">
        {!isClicked && emojiCard()}
        {isClicked && greetingCard()}
      </div>
    )
  }
}

export default Feedback
