import React from "react";
import NavBar from "../layout/navBar/NavBar";
import axios from "axios";
import "./Register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered } from "@fortawesome/free-solid-svg-icons";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      dublicate: "",
      request: "",
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
    console.log(data.password.length, data.dublicate);
    if (data.password !== data.dublicate) {
      error.dublicate = "Паролата не е повторена правилно!";
    }
    return error;
  };
  handleSubmit = () => {
    const errors = this.validateForm(this.state);
    const isValid = Object.values(errors).filter(Boolean).length <= 0;
    console.log(this.state);
    if (!isValid) {
      this.setState({ error: errors });
      return;
    }
    this.setState({ request: "" });
    const user = {
      username: this.state.username,
      password: this.state.password,
      isAdmin: false
    };
    axios
      .post("http://localhost:5000/users/add", user)
      .then(res => console.log(res.data))
      .catch(() => this.setState({ request: "failed" }));
    this.setState({
      username: "",
      password: "",
      dublicate: "",
      request: "Регистрирахте се успешно!"
    });
  };

  render() {
    return (
      <div className="form">
        <NavBar />
        <div className="logo">
          EasyTrade
          <FontAwesomeIcon className="icon" icon={faRegistered} />
        </div>
        <div className="register_form">Регистрация</div>
        <div className="register">
          <div>
            <label className="register_username">Име</label>

            <input
              className="input_form"
              name="username"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <div>
              {this.state.error.username === undefined
                ? ""
                : this.state.error.username}
            </div>
          </div>
          <div>
            <label className="register_password">Парола</label>

            <input
              className="input_form"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div>
              {this.state.error.password === undefined
                ? ""
                : this.state.error.password}
            </div>
          </div>
          <div>
            <label className="register_repeat_password">
              Повторете паролата
            </label>
            <input
              className="input_form"
              type="password"
              name="dublicate"
              value={this.state.dublicate}
              onChange={this.handleChange}
            />
            <div>
              {this.state.error.dublicate === undefined
                ? ""
                : this.state.error.dublicate}
            </div>
          </div>
          <button onClick={this.handleSubmit} className="submit_register">
            Регистрирай се
          </button>
          <div>
            <h1>{this.state.request}</h1>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {};

export default Register;

// export default class RegistrationForm extends React.Component {
//   render() {
//     return (
//       <div>
//         <NavBar />
//         <form>
//           <div>
//             <h1 style={{ color: "grey" }}>Регистрация:</h1>
//           </div>
//           <p style={{ color: "blue" }}>И-мейл:</p>
//           <input name="userEmail" type="email" required />
//           <p style={{ color: "blue" }}>Парола:</p>
//           <input name="userPassword" type="password" required />
//           <p style={{ color: "blue" }}>Потвърди парола:</p>
//           <input name="confirmPassword" type="password" required />
//           <p style={{ color: "blue" }}>Име:</p>
//           <input name="firstName" />
//           <p style={{ color: "blue" }}>Фамилия:</p>
//           <input name="lastName" />
//           <p style={{ color: "blue" }}>Държава:</p>
//           <input name="country" />
//
//           <button className="btn-outline-warning">Регистриране</button>
//         </form>
//       </div>
//     );
//   }
// }
