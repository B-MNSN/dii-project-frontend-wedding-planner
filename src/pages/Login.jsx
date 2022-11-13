import logo from "../image/logo_cusu.png";
import Form from "react-bootstrap/Form";

function Login() {
  return (
    <>
      <div className="login-page d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <img src={logo} alt="logo" className="logo mt-3" width={300} />
          </div>
          <div className="login-bg col mt-3 rounded-3">
            <Form className="m-5">
              <h2 className="fs-3 mb-3 fw-bolder">Login to your account</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User name or Email</Form.Label>
                <Form.Control type="email" placeholder="Enter User name or Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <button className="btnLogin border-0 rounded-2 w-50 py-2 fw-bold" type="submit">Login</button>
              </div>
              <Form.Group className="my-3 d-flex justify-content-center" controlId="formBasicCheckbox">
                <a href="/" className="text-decoration-none text-muted">Register /</a>
                <a href="/" className="text-decoration-none text-muted">forget password</a>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
