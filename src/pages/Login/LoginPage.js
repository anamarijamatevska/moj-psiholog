import { useState } from "react"
import { Button, FloatingLabel, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import { ArrowLeft } from "react-bootstrap-icons"

import './LoginPage.css'
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"

const LoginPage = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errorMessage, setErrorMessage] = useState()

  const login = (e) => {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('users'))
    const hasUser = users.find((usr) => usr.email === email && usr.password === password)
    if (hasUser) {
      sessionStorage.setItem('hasUser', true)
      window.location.assign('/welcome')
    } else {
      setErrorMessage('Корисникот не е пронајден')
    }
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