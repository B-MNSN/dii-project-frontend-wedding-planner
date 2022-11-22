import logo from "../image/logo_cusu.png";
import Form from "react-bootstrap/Form";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

function Register() {

  const [user_name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // useEffect(() => {
  //   if(password === confirmPassword) window.location.href = "/login";
  // }, [password, confirmPassword]);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const regis = await axios.post("http://localhost:4001/register", {
        user_name,
        email,
        password,
      });
      console.log(regis);
      localStorage.setItem("status", JSON.stringify(regis.data.status));
      // setStatus(JSON.parse(localStorage.getItem("status")));
      window.location.href = "/login";
    } catch (error) {
      console.error(error);
      if (error instanceof AxiosError) {
        console.error(error.message);
      }
    }
  };

  return (
    <>
      <div className="register-page d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <img src={logo} alt="logo" className="logo mt-3" width={250} />
          </div>
          <div className="register-bg col mt-3 rounded-3">
            <Form className="m-5" onSubmit={onSubmit}>
              <h3 className="fs-3 mb-3 fw-bolder">Create to your account</h3>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User name</Form.Label>
                <Form.Control type="text" placeholder="Enter User name" onChange={(event) => setUserName(event.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" onChange={(event) => setEmail(event.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}/>
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
