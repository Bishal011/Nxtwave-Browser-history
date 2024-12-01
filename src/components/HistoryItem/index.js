import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onClickDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="bg-container">
        <div className="row">
          <p className="para4">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="img3" />
          <p className="para2">{title}</p>
          <p className="para3">{domainUrl}</p>
        </div>
      </div>

      <button
        data-testid="delete"
        className="button"
        type="button"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="img4"
        />
      </button>
    </li>
  )
}

export default HistoryItem
