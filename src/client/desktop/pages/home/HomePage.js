import React from "react";
import PropTypes from "prop-types";
import NavBar from "../../modules/layout/navBar/NavBar";
import "../../modules/layout/Wrapper/LayoutWrapper.css";
import ProfileContainer from "../../modules/profile/ProfileContainer";

const HomePage = props => {
    let jwt= localStorage.getItem('jwt')
    if(jwt===null){
        window.location.href = "/login"
        return;
    }
  return (
    <div>
      <NavBar />
        <ProfileContainer/>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
