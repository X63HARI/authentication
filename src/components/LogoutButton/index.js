import Cookies from 'js-cookie'

const LogoutButton = props => {
  const logoutBtn = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <button type="button" onClick={logoutBtn}>
      Logout
    </button>
  )
}

export default LogoutButton
