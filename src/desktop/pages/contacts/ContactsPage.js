import React from "react";
import PropTypes from "prop-types";
import NavBar from "../../modules/layout/navBar/NavBar";
import ContactsContainer from "../../modules/contacts/ContactsContainer";
import ContactPage from './ContactPage.module.css'
import Footer from '../../modules/layout/footer/Footer';

const ContactsPage = props => {
        return (
            <div>
                <NavBar/>
                <div className={ContactPage.container}>
                    <ContactsContainer/>
                </div>
                <Footer/>
            </div>
        );
};

ContactsPage.propTypes = {};

export default ContactsPage;
