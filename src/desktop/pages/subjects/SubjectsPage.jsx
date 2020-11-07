import React from 'react';
import PropTypes from 'prop-types';
import NavBar from "../../modules/layout/navBar/NavBar";
import SubjectsContainer from "../../modules/subjects/SubjectsContainer";
import Footer from '../../modules/layout/footer/Footer';

const SubjectsPage = props => {
    return (
        <div>
            <NavBar/>
            <SubjectsContainer grade={props.match.params.year} />
            <Footer/>
        </div>
    );
};

SubjectsPage.propTypes = {

};

export default SubjectsPage;
