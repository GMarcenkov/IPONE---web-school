import React from "react";
import PropTypes from "prop-types";
import ProfileContainer from "../../modules/profile/ProfileContainer";
import NavBar from "../../modules/layout/navBar/NavBar";
import Footer from "../../modules/layout/footer/Footer";

const ProfilePage = props => {
    if (localStorage.getItem("jwt") === null) {
        {window.location = "/login"}
    }else {
        return (
            <div>
                <NavBar/>
                <ProfileContainer/>
                <Footer/>
            </div>
        );
    }
};

ProfilePage.propTypes = {};

export default ProfilePage;
