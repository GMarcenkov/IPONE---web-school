import React from 'react';
import PropTypes from 'prop-types';
import NavBar from "../../modules/layout/navBar/NavBar";
import SubjectsContainer from "../../modules/subjects/SubjectsContainer";

const SubjectsPage = props => {
    return (
        <div>
            <NavBar/>
            <SubjectsContainer/>
        </div>
    );
};

SubjectsPage.propTypes = {

};

export default SubjectsPage;
