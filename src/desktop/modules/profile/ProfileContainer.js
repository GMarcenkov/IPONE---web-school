import ProfileInfo from "./components/profileInfo/ProfileInfo";
import React from "react";
import SchoolYearsList from "../schoolYears/schoolYears/schoolYearsList";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Profile from "./components/ProfileContainer.module.css";

let user;

if (localStorage.getItem("jwt")) {
     user = jwt_decode(localStorage.getItem("jwt"));
  }


class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      user: {},
      IsEditPhone: false,
      IsEditEmail: false,
      oldPassword: "",
      newPassword: "",
      phone: "",
      email: "",
      errors:{}
    };
  }

  componentDidMount() {
    this.handleGetUser();
  }
  handleGetUser = async () => {
    this.setState({
      IsEditPhone: false,
      IsEditEmail: false
    });
    await axios
      .get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/users/${user.id}`)
      .then(response => {
        this.setState({
          user: response.data
        });
      })
      .catch(function(error) {});
  };
  validateForm = data => {
    const error = {};

    if (data.oldPassword.length < 3) {
      error.oldPassword = "Името е твърде късо.";
    }
    if (data.newPassword.length < 3) {
      error.newPassword = "Липсва цена.";
    }
    return error;
  };

  handleEdit = (edit, info) => {
    const { phone, email } = this.state;
    if (edit === "phone") {
      if (this.state.IsEditPhone) {
        axios
          .put(
            `${process.env.REACT_APP_BACKEND_ENDPOINT}/users/edit/${user.id}`,
            { phone: phone }
          )
          .then(() => this.handleGetUser());
      } else {
        this.setState({ IsEditPhone: true, phone: info });
      }
    }

    if (edit === "email") {
      console.log('sdfsdf')
      if (this.state.IsEditEmail) {
        axios
          .put(
            `${process.env.REACT_APP_BACKEND_ENDPOINT}/users/edit/${user.id}`,
            { email: email }
          )
          .then(() => this.handleGetUser());
      } else {
        this.setState({ IsEditEmail: true, email: info });
      }
    }
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmitEdit = () => {
    const errors = this.validateForm(this.state);
    const isValid = Object.values(errors).filter(Boolean).length <= 0;
    if (!isValid) {
      this.setState({ errors: errors });
      return;
    }
    const password={
      
    }
    axios
        .put(
            `${process.env.REACT_APP_BACKEND_ENDPOINT}/users/edit/${user.id}`,password
        )

  };
  render() {
    const {
      user,
      IsEditEmail,
      IsEditPhone,
      oldPassword,
      newPassword,
      phone,
      email
    } = this.state;
    return (
      <div className={Profile.profileContainer_holder}>
        <div className={Profile.container_title}>Профил</div>
        <ProfileInfo
          user={user}
          IsEditPhone={IsEditPhone}
          IsEditEmail={IsEditEmail}
          oldPassword={oldPassword}
          newPassword={newPassword}
          phone={phone}
          email={email}
          handleEdit={this.handleEdit}
          handleInput={this.handleInput}
        />
      </div>
    );
  }
}

ProfileContainer.propTypes = {};

export default ProfileContainer;
