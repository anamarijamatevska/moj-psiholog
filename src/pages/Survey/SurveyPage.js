import { BoxArrowInLeft } from "react-bootstrap-icons"
import Flow from "../../components/Flow/Flow"
import { useState } from "react"
import BackgroundImage from '../../assets/images/background-main.jpg'
import LandscapeLogo from '../../assets/images/logo-landscape-1.png'

import '../Welcome/WelcomePage.css'

const SurveyPage = () => {
  const [isSessionBooked, setIsSessionBooked] = useState()

  const logOutHandler = () => {
    sessionStorage.removeItem('hasUser')
    window.location.assign('/')
  }

  return (
    <div className='welcomePageWrapper d-flex flex-column' style={isSessionBooked && { backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', height: window.innerHeight }}>
      <div className="row mb-5 d-flex flex-row align-items-center">
        <div className="col-sm-6">
          {!isSessionBooked && <img src={LandscapeLogo} alt="" height={80} />}
        </div>
        <div className={`d-flex col-sm-6 justify-content-end ${isSessionBooked && 'boxShadow text-light'}`} role="button" onClick={logOutHandler}>
          <BoxArrowInLeft
            size={30}
          />
          <span className='ms-1'>
            Одјави се
          </span>
        </div>
      </div>
      <Flow
        isSessionBooked={isSessionBooked}
        setIsSessionBooked={setIsSessionBooked}
      />
    </div>
  )
}

export default SurveyPage