import "@styles/react/pages/page-authentication.scss"
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import {
  Button, Card, CardImg, CardImgOverlay, CardText, Col, Input, Row
} from "reactstrap"
import { Failure, Success } from "../components/toast"
const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('admin@authentic.com')
  const [password, setPassword] = useState('Intro!234')
  const login = () => {
    if (!email && !email.length) {
      Failure("Please enter Email")
      return false
    }
    if (!password && !password.length) {
      Failure("Please enter password ")
      return false
    }

    const body = {
      email,
      password
    }

    axios.post(`https://authentic-web.authenticmatchinglimited.com/api/admin_login`, body)
      .then(response => {
        console.log(response?.data, "response?.data")
        localStorage.setItem('userDetails', JSON.stringify(response?.data?.response?.detail))
        localStorage.setItem('token', response?.data?.response?.detail?.token)
        localStorage.setItem('role', response?.data?.response?.detail?.type)
        Success(response?.data?.response?.message)
        navigate("/dashboard")
      })
      .catch(err => {
        Failure(err?.response?.data?.error?.message)
      })
  }
  return (
    <div className="auth-wrapper auth-cover">
      <Row className="auth-inner m-0 pb-0">
        <Col
          className="d-flex align-items-center  px-0 vh-100"
          lg="12" sm="12"
        >
          <Card inverse className="m-0 vw-100 vh-100">
            <CardImg className="vw-100 vh-100 rounded-0" />
            <CardImgOverlay className="d-flex justify-content-center align-items-center">
              <center className="mb-2 mt-;g-auto">
                <Row>
                  <Col className="px-xl-5 mx-auto mt-3" xs={12}>
                    <h2 className="text-black ">
                      <span className="fw-bolder">Welcome to admin</span>
                    </h2>
                    <CardText>
                      <small className="text-secondary">enter your email to continue</small>
                    </CardText>
                    <div className="mb-1">
                      <div><Input placeholder="email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} /></div>
                    </div>
                    <div className="mb-1">
                      <div><Input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password} /></div>
                    </div>
                    <Button.Ripple
                      color="primary"
                      className="bg-white "
                      block
                      onClick={login}
                    >
                      <small className="">
                        login
                      </small>
                    </Button.Ripple >
                    <Link to="/forget-password " className="text-center w-100">
                      <small className="text-dark">
                        forget password
                      </small>
                    </Link>
                  </Col>
                </Row>
              </center>
            </CardImgOverlay>

          </Card>

        </Col>
      </Row>
    </div>
  )
}

export default Login
