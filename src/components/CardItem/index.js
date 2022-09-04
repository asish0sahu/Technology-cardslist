// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsListType} = props
  const {title, description, imgUrl, className} = cardsListType
  return (
    <li className={`${className} card-container`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="img-container">
        <img className="image-sizing" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
