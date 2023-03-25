// Write your JS code here
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

const Home = () => {
  const logoutFunction = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <>
      <Header />
      <h1>Home Route</h1>
      <button onClick={logoutFunction}>Logout</button>
    </>
  )
}

export default Home
