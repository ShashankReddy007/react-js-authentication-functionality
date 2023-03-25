// Write your JS code here
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

const About = () => {
  const logoutFunction = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <>
      <Header />
      <h1>About Route</h1>
      <button onClick={logoutFunction}>Logout</button>
    </>
  )
}

export default About
