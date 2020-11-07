import React from 'react';
import PropTypes from 'prop-types';
import SubjectCss from '../../Subjects.module.css';

const SubjectTableHead = ({children}) => {
    return (
        <thead >
        {children}
        </thead>
    );
};

SubjectTableHead.propTypes = {

};

export default SubjectTableHead;
