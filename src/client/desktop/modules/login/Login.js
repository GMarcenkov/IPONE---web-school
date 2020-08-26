import React from "react";
import "./Login.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../layout/navBar/NavBar";
import LoginContainer from "./components/LoginContainer";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: {}
    };
  }
  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };
  validateForm = data => {
    const error = {};

    if (data.password.length < 3) {
      error.password = "Паролата е твърде късо.";
    }
    if (data.username.length < 3) {
      error.username = "Името е твърде късо.";
    }

    return error;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const errors = this.validateForm(this.state);
    const isValid = Object.values(errors).filter(Boolean).length <= 0;

    if (!isValid) {
      this.setState({ error: errors });
      return;
    }

    this.setState({ request: "" });
    const login = {
      username: this.state.username,
      password: this.state.password
    };
    await axios
      .post("http://localhost:5000/auth/", login)
      .then(req => {
        localStorage.setItem("jwt", req.data.token);

        req.data.user.isAdmin
          ? (window.location.href = "/admincp")
          : (window.location.href = "/");

      })
      .catch(e => {
        this.setState({ request: "Failed to login" });
      });
  };
  render() {
    return (
      <div className="form">
        {" "}
        <NavBar />
        <div className="logo">
          <FontAwesomeIcon className="icon" icon={faGraduationCap} />
          Ipon - web school</div>
        <div >
          <LoginContainer
              password={this.state.password}
              username={this.state.username}
              request={this.state.request}
              error={this.state.error}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
          />
        </div>

      </div>
    );
  }
}

Login.propTypes = {};

export default Login;

// export default function Login(props) {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//
//     function validateForm() {
//         return email.length > 0 && password.length > 0;
//     }
//
//     function handleSubmit(event) {
//         event.preventDefault();
//     }
//
//     return (
//         <div>
//             <NavBar />
//             <div className="Login">
//                 <form onSubmit={handleSubmit}>
//                     <FormGroup controlId="email" bsSize="large">
//                         <FormLabel>Имейл адрес</FormLabel>
//                         <FormControl
//                             autoFocus
//                             type="email"
//                             value={email}
//                             onChange={e => setEmail(e.target.value)}
//                         />
//                     </FormGroup>
//                     <FormGroup controlId="password" bsSize="large">
//                         <FormLabel>Парола</FormLabel>
//                         <FormControl
//                             value={password}
//                             onChange={e => setPassword(e.target.value)}
//                             type="password"
//                         />
//                     </FormGroup>
//                     <Button block bsSize="large" disabled={!validateForm()} type="submit">
//                         Вход
//                     </Button>
//                 </form>
//             </div>
//         </div>
//
//     );
// }
