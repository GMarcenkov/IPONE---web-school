import React from 'react';
import PropTypes from 'prop-types';
import NavBar from "../../modules/layout/navBar/NavBar";
import ProfileContainer from "../../modules/profile/ProfileContainer";
import Login from "../../modules/login/Login";
import Footer from '../../modules/layout/footer/Footer';
import TestHelmet from './TestHelmet';


const LoginPage = props => {
  console.log(localStorage.getItem("jwt"))
    if (localStorage.getItem("jwt")) {
        {window.location = "/"}
    }else{
        return (
            <div>
               
                        <NavBar/>
                        <Login/>
                        <Footer/>
               
                        {console.log('2')}
            </div>
        );
    }
};


LoginPage.propTypes = {

};

export default LoginPage;
