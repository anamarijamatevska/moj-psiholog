import { BoxArrowInLeft } from "react-bootstrap-icons"
import Flow from "../../components/Flow/Flow"
import { useState } from "react"
import BackgroundImage from '../../assets/images/background-main.jpg'

import '../Welcome/WelcomePage.css'

const SurveyPage = () => {
  const [isSessionBooked, setIsSessionBooked] = useState()

  const logOutHandler = () => {
    sessionStorage.removeItem('hasUser')
    window.location.assign('/')
  }

  return (
    <div className='welcomePageWrapper d-flex flex-column' style={isSessionBooked && { backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', height: window.innerHeight }}>
      <div className={`d-flex justify-content-end mb-5 ${isSessionBooked && 'boxShadow text-light'}`} role="button" onClick={logOutHandler}>
        <BoxArrowInLeft
          size={30}
        />
        <span className='ms-1'>
          Одјави се
        </span>
      </div>
      <Flow
        isSessionBooked={isSessionBooked}
        setIsSessionBooked={setIsSessionBooked}
      />
    </div>
  )
}

export default SurveyPage