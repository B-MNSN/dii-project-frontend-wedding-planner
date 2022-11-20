import logo from "../image/logo_cusu.png";
import Form from "react-bootstrap/Form";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

function Login() {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [token, setToken] = useState("");

  //transaction
  const [user_id, setUser_id] = useState('');
  const [guest, setGuest] = useState('');
  const [theme, setTheme] = useState('');
  const [work, setWork] = useState('');
  const [food, setFood] = useState('');
  const [location, setLocation] = useState('');
  const [dress, setdress] = useState('');
  const [photo, setPhoto] = useState('');
  const [card, setCard] = useState('');
  const [gift, setGift] = useState('');

  const handChange = (fn) => {
    return (event) => {
      fn(event.target.value);
    };
  };

  useEffect(() => {
    if (!token) return
    window.location.href = "/home";
  }, [token]);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const start = await axios.post("http://localhost:4001/login", {
        email,
        password,
      });

      const transaction = await axios.post('http://localhost:4001/transaction', {
        user_id,
        guest,
        theme,
        work,
        food,
        location,
        dress,
        photo,
        card,
        gift

      });
      console.log(transaction);

      console.log(start);
       
      localStorage.setItem("status", start.data.token);
      setToken(localStorage.getItem("status"));
      // window.location.href = "/home";

    } catch (error) {
      console.error(error);
      if (error instanceof AxiosError) {
        console.error(error.message);
      }
    }
  };
  return (
    <>
      <div className="login-page d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <img src={logo} alt="logo" className="logo mt-3" width={250} />
          </div>
          <div className="login-bg col mt-3 rounded-3">
            <Form className="m-5" onSubmit={onSubmit}>
              <h2 className="fs-3 mb-3 fw-bolder">Login to your account</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User name or Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter User name or Email"
                  onChange={handChange(setEmail)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handChange(setPassword)}
                />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <button
                  className="btnLogin border-0 rounded-2 w-50 py-2 fw-bold"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <Form.Group
                className="my-3 d-flex justify-content-center"
                controlId="formBasicCheckbox"
              >
                <a href="/register" className="text-decoration-none text-muted">
                  Register /
                </a>
                <a href="/" className="text-decoration-none text-muted">
                  forget password
                </a>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
