import './index.css'

const PasswordItem = props => {
  const {passwordDetails, showStatus, onDeletePassword} = props
  const {website, password, username, id} = passwordDetails

  const onClickDelete = () => {
    onDeletePassword(id)
  }

  const showPassword = () => <p className="desc">{password}</p>

  const hidePassword = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-img"
    />
  )

  return (
    <li className="password-item">
      <p className="avatar">{username[0]}</p>
      <div className="password-info">
        <p className="desc">{website}</p>
        <p className="desc">{username}</p>
        {showStatus ? showPassword() : hidePassword()}
      </div>
      <button
        type="button"
        className="button"
        data-testid="delete"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
