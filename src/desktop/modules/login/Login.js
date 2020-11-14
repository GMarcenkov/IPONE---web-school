import React from "react";
import "./Login.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import LoginContainer from "./components/LoginContainer";
import {Helmet} from "react-helmet";
import gosho from '../../../images/georgi.jpg'

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
      .post(`${process.env.REACT_APP_BACKEND_ENDPOINT}/auth/`, login)
      .then(req => {
        localStorage.setItem("jwt", req.data.token);

        req.data.user.isAdmin
          ? (window.location.href = "/")
           :(window.location.href = "/")

      })
      .catch(e => {
        this.setState({ request: "Failed to login" });
      });
  };
  render() {
    return (
      <div className="form">
        {" "}
        <Helmet>
        <meta property="og:url"                content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
<meta property="og:type"               content="article" />
<meta property="og:title"              content="When Great Minds Don’t Think Alike" />
<meta property="og:description"        content="How much does culture influence creative thinking?" />
<meta property="og:image"              content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />
            </Helmet>
        <div className="logo">
         IPON WEB SCHOOL
         </div>
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


