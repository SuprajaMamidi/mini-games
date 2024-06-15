import './index.css'

const RpsImageItem = props => {
  const {buttonDetails, onGetId} = props
  const {id, imageUrl} = buttonDetails

  const onclickButton = () => {
    onGetId(id, imageUrl)
  }
  return (
    <li className="rps-list-items">
      <button
        type="button"
        data-testid={`${id}Button`}
        onClick={onclickButton}
        className="rps-image-button"
      >
        <img src={imageUrl} alt={id} className="rps-images" />
      </button>
    </li>
  )
}
export default RpsImageItem
