import './index.css'

const MemoryMatrixCard = ({
  id,
  highlightedBoxes,
  handleClick,
  selected,
  wrong,
}) => {
  let classNames = 'memory-matrix-each-block'

  if (highlightedBoxes) {
    classNames += ' highlighted'
  } else if (selected) {
    classNames += ' selected'
  } else if (wrong) {
    classNames += ' wrong'
  }

  const handleOnClick = () => {
    handleClick(id)
  }

  return (
    <div
      data-testid={highlightedBoxes ? 'highlighted' : 'notHighlighted'}
      className={classNames}
      id={id}
      role="button"
      tabIndex={0}
      aria-label="Memory Matrix Card"
      onClick={handleOnClick}
    />
  )
}

export default MemoryMatrixCard
