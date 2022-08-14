import "@styles/react/pages/page-authentication.scss"
import { Link, useNavigate } from "react-router-dom"
import {
  Button, Card, CardImg, CardImgOverlay, CardText, Col, Input, Row
} from "reactstrap"
const Login = () => {
  const navigate = useNavigate()
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
                      <div><Input placeholder="email" /></div>
                    </div>
                    <div className="mb-1">
                      <div><Input type="password" placeholder="password" /></div>
                    </div>
                    <Button
                      color="primary"
                      className="bg-white "
                      block
                      onClick={() => navigate("/dashboard")}
                    >
                      <small className="">
                        login
                      </small>
                    </Button>
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
          {/* <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-1">
              Welcome to Vuexy! 👋
            </CardTitle>
            <CardText className="mb-2">
              Please sign-in to your account and start the adventure
            </CardText>
            <Form
              className="auth-login-form mt-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-1">
                <Label className="form-label" for="login-email">
                  Email
                </Label>
                <Input
                  type="email"
                  id="login-email"
                  placeholder="john@example.com"
                  autoFocus
                />
              </div>
              <div className="mb-1">
                <div className="d-flex justify-content-between">
                  <Label className="form-label" for="login-password">
                    Password
                  </Label>
                  <Link to="/forgot-password">
                    <small>Forgot Password?</small>
                  </Link>
                </div>
                <InputPasswordToggle
                  className="input-group-merge"
                  id="login-password"
                />
              </div>
              <div className="form-check mb-1">
                <Input type="checkbox" id="remember-me" />
                <Label className="form-check-label" for="remember-me">
                  Remember Me
                </Label>
              </div>
              <Button tag={Link} to="/" color="primary" block>
                Sign in
              </Button>
            </Form>
            <p className="text-center mt-2">
              <span className="me-25">New on our platform?</span>
              <Link to="/register">
                <span>Create an account</span>
              </Link>
            </p>  
          </Col> */}
        </Col>
      </Row>
    </div>
  )
}

export default Login
