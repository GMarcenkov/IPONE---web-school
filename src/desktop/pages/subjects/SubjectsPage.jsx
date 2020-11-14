import React from 'react';
import PropTypes from 'prop-types';
import NavBar from "../../modules/layout/navBar/NavBar";
import SubjectsContainer from "../../modules/subjects/SubjectsContainer";
import Footer from '../../modules/layout/footer/Footer';
import {Helmet} from "react-helmet";

const SubjectsPage = props => {
    return (
        <div>
            <NavBar/>
            <Helmet>
                        <title>SubjectsPage</title>
                        <meta property="og:description"   content=" SubjectsPage " />
                        <meta property="og:description"   content=" SubjectsPage " />
                        <link rel="canonical" href="https://iponwebschool.netlify.app/login" />
            </Helmet>
            <SubjectsContainer grade={props.match.params.year} />
            <Footer/>
        </div>
    );
};

SubjectsPage.propTypes = {

};

export default SubjectsPage;
