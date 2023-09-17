import { BoxArrowInLeft } from "react-bootstrap-icons"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import BackgroundImage from '../../assets/images/background-main.jpg'

import './WelcomePage.css'

const WelcomePage = () => {
  const logOutHandler = () => {
    sessionStorage.removeItem('hasUser')
    window.location.assign('/')
  }

  const navigate = useNavigate()

  return (
    <div className='welcomePageWrapper d-flex flex-column welcomePageContainer' style={{backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', height: window.innerHeight}}>
      <div className='text-light d-flex justify-content-end mb-5 boxShadow' role="button" onClick={logOutHandler}>
        <BoxArrowInLeft size={30} /><span className='ms-1'>Одјави се</span>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center text-light">
        <h1 className="mb-5 mt-5 boxShadow">МОЈ ПСИХОЛОГ</h1>
        <h3 className="mb-5 boxShadow">РАЗГОВОР БЕЗ ГРАНИЦИ</h3>
        <Button variant="success p-3" onClick={() => { navigate('/survey') }}>Избери психолог</Button>
      </div>
    </div>
  )
}

export default WelcomePage