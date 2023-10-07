import { collection, getDocs } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { getFirebaseConfig } from "../../helpers/firebaseHelpers";
import { THERAPIST_IMAGES } from "../../constants";
import { BoxArrowInLeft } from "react-bootstrap-icons";
import LandscapeLogo from '../../assets/images/logo-landscape-1.png';
import { Button } from "react-bootstrap";

const Profile = () => {
  const [therapist, setTherapist] = useState()
  const userTherapistData = JSON.parse(sessionStorage.getItem('therapist'))
  const { db } = getFirebaseConfig()

  const getTherapists = useCallback(async () => {
    const data = await getDocs(collection(db, "therapist"))

    data?.forEach((therapist) => {
      if (therapist?.data()?.fullname === userTherapistData?.therapist) setTherapist(therapist.data())
    })

  }, [db, userTherapistData?.therapist]);

  useEffect(() => {
    getTherapists()
  }, [getTherapists])

  const logOutHandler = () => {
    sessionStorage.removeItem('hasUser')
    window.location.assign('/')
  }

  return (
    <div className='welcomePageWrapper'>
      <div className="row mb-5 d-flex flex-row align-items-center">
        <div className="col-sm-6">
          <img src={LandscapeLogo} alt="" height={80} />
        </div>
        <div className='d-flex col-sm-6 justify-content-end' role="button" onClick={logOutHandler}>
          <BoxArrowInLeft
            size={30}
          />
          <span className='ms-1'>
            Одјави се
          </span>
        </div>
      </div>
      <div className='row d-flex justify-content-center'>
        <div className='col-sm-4'>
          <h4 className="text-center mb-3">ВАШИОТ ИЗБРАН ПСИХОЛОГ</h4>
          <div className="card">
            <img src={THERAPIST_IMAGES[therapist?.image]} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text mb-0">{therapist?.fullname}</p>
              <p className="card-text">{therapist?.phoneNumber}</p>
            </div>
          </div>
          <div className="mt-3 text-center d-flex justify-content-center">
            <Button onClick={() => window.location.assign('/survey')} className="w-100" variant="success">ИЗБЕРИ НОВ ПСИХОЛОГ</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile