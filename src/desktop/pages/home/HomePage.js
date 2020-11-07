import React from "react";
import PropTypes from "prop-types";
import NavBar from "../../modules/layout/navBar/NavBar";
import "../../modules/layout/Wrapper/LayoutWrapper.css";
import ProfileContainer from "../../modules/profile/ProfileContainer";
import jwt_decode from "jwt-decode";
import SchoolYearsContainer from "../../modules/schoolYears/SchoolYearsContainer";
import Footer from "../../modules/layout/footer/Footer";

const HomePage = props => {
  if (localStorage.getItem("jwt") === null) {
   {window.location = "/login"}
  }else{
      return (
          <div>
              <NavBar />
             <SchoolYearsContainer/>
              <Footer/>
          </div>
      );
  }
};

HomePage.propTypes = {};

export default HomePage;
