import { useState } from "react"
import { Button, FloatingLabel, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import { ArrowLeft } from "react-bootstrap-icons"
import { signInWithEmailAndPassword } from "firebase/auth";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import { FIREBASE_ERROR_CODES } from "../../constants";
import { getFirebaseConfig } from "../../helpers/firebaseHelpers";
import { collection, getDocs } from "firebase/firestore";

import './LoginPage.css'


const LoginPage = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errorMessage, setErrorMessage] = useState()
  const { auth, db } = getFirebaseConfig()

  const login = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then(async () => {
        sessionStorage.setItem('hasUser', true)
        const data = await getDocs(collection(db, "user-therapist"))
        const userTherapists = []

        data?.forEach((entry) => {
          if (entry?.data()?.user === auth.currentUser.email) userTherapists.push(entry?.data())
        })

        userTherapists?.sort((a, b) => {
          return new Date(b.createdAt.seconds * 1000 + b.createdAt.nanoseconds / 1000000) - new Date(a.createdAt.seconds * 1000 + a.createdAt.nanoseconds / 1000000)
        })

        let redirectionUrl = '/welcome'
        if (userTherapists?.[0]) {
          sessionStorage.setItem('therapist', JSON.stringify(userTherapists[0]))
          redirectionUrl = '/profile'
        }

        window.location.assign(redirectionUrl)
      })
      .catch((error) => {
        setErrorMessage(FIREBASE_ERROR_CODES[error.code])
      });
  }

  return (
    <div className="loginPageWrapper">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-sm-6">
          <Link to='/'>
            <ArrowLeft size={30} />
          </Link>
          <Form onSubmit={login} className="pt-3">
            <FloatingLabel
              controlId="floatingInput"
              label="Име"
              className="mb-3"
            >
              <Form.Control required onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Е-маил" name="email" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Лозинка">
              <Form.Control required onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Лозинка" name="password" />
            </FloatingLabel>
            {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
            <Button className="mt-3" type="submit">НАЈАВИ СЕ</Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage