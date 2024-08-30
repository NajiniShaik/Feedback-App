import './index.css'

const EmojiItems = props => {
  const {emojiDetails, updateValue} = props
  const {imageUrl, name} = emojiDetails

  const onClickEmoji = () => {
    updateValue(true)
  }

  return (
    <li>
      <button className="button" type="button" onClick={onClickEmoji}>
        <img src={imageUrl} alt={name} className="emoji" />
      </button>
      <p className="name">{name}</p>
    </li>
  )
}

export default EmojiItems
