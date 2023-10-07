import { Button, FloatingLabel, Form } from "react-bootstrap"
import { memo, useState } from "react"
import { Link } from "react-router-dom"
import Logo from '../../assets/images/logo.png'
import { createUserWithEmailAndPassword } from "firebase/auth";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import { FIREBASE_ERROR_CODES } from "../../constants";
import { getFirebaseConfig } from "../../helpers/firebaseHelpers";

import './HomePage.css'

const HomePage = () => {
  const [name, setName] = useState()
  const [lastname, setLastname] = useState()
  const [age, setAge] = useState()
  const [gender, setGender] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errorMessage, setErrorMessage] = useState()

  const { auth } = getFirebaseConfig()

  const submit = async (e) => {
    e.preventDefault()

    const user = {
      name,
      lastname,
      age,
      gender,
      email,
      password
    }

    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(() => {
        setAge(null)
        setEmail(null)
        setName(null)
        setLastname(null)
        setGender(null)
        setPassword(null)

        sessionStorage.setItem('hasUser', true)
        window.location.assign('/welcome')
      })
      .catch((error) => {
        setErrorMessage(FIREBASE_ERROR_CODES[error.code])
      });
  }

  return (
    <div className='row homePageWrapper'>
      <div className='col-sm-6 d-flex align-items-center justify-content-center'>
        <img width={300} src={Logo} alt='' />
      </div>
      <div className='col-sm-6 d-flex justify-content-start flex-column'>
        <Form onSubmit={submit}>
          <FloatingLabel
            controlId="floatingInput"
            label="Име"
            className="mb-3"
          >
            <Form.Control required onChange={(e) => setName(e.target.value)} type="text" placeholder="Име" name="name" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Презиме"
            className="mb-3"
          >
            <Form.Control required onChange={(e) => setLastname(e.target.value)} type="text" placeholder="Презиме" name="surname" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Години"
            className="mb-3"
          >
            <Form.Control required onChange={(e) => setAge(e.target.value)} type="number" placeholder="Години" name="age" />
          </FloatingLabel>

          <Form.Check required onClick={(e) => setGender(e.target.value)} inline label='Маж' name='gender' type="radio" aria-label="radio 1" value='1' />
          <Form.Check required onClick={(e) => setGender(e.target.value)} inline label='Жена' name='gender' type="radio" aria-label="radio 1" className="mb-3" value='2' />

          <FloatingLabel
            controlId="floatingInput"
            label="Е-маил"
            className="mb-3"
            name='email'
          >
            <Form.Control required onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingPassword" label="Лозинка">
            <Form.Control required onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Лозинка" name="password" />
          </FloatingLabel>
          {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
          <Button className="mt-3" type="submit">РЕГИСТРИРАЈ СЕ</Button>
        </Form>
        <Link className='mt-1' to='/login'>Имаш профил? Најави се!</Link>
      </div>
    </div>
  )
}


export default memo(HomePage)