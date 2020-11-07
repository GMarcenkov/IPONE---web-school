import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import FooterCss from './Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Footer = props => {
    return (
        <footer className={FooterCss.footer}>
                <div className={FooterCss.footer_container}>

                    <Link to="/profile" className={FooterCss.content}>
                        <FontAwesomeIcon icon={faGraduationCap} />
                        {" "}За Проекта
                     </Link>
                     <Link to="/developers" className={FooterCss.content}>
                        <FontAwesomeIcon icon={faUserCog} />
                        {" "} За Разработчиците
                     </Link>
                     <Link to="/contacts" className={FooterCss.content}>
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        {" "}Контакти
                     </Link>
                    <div>
                    {/* <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} /> 
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faYoutube} /> */}
                    </div>
                    
                   
                </div>

        </footer>
    );
};

Footer.propTypes = {

};

export default Footer;
