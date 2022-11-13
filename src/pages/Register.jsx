import logo from "../image/logo_cusu.png";
import Form from "react-bootstrap/Form";

function Register() {
  return (
    <>
      <div className="register-page d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <img src={logo} alt="logo" className="logo mt-3" width={300} />
          </div>
          <div className="register-bg col mt-3 rounded-3">
            <Form className="m-5">
              <h3 className="fs-3 mb-3 fw-bolder">Create to your account</h3>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User name</Form.Label>
                <Form.Control type="text" placeholder="Enter User name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <button className="btnRegister border-0 rounded-2 w-50 py-2 fw-bold" type="submit">Confirm</button>
              </div>
              
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
