import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const HighSchool = ({high}) => {
    return (
        <div className="grade_form">
            <div className="grade_title">Гимназиален курс</div>
            <div className="grade_number_form">
                {
                    high.map(({grade})=>(
                        <Link className="grade_number"
                              to={`${window.location.pathname}/${grade}`}
                        >
                            {grade}. клас
                        </Link>

                    ))
                }
            </div>
        </div>
    );
};

HighSchool.propTypes = {

};

export default HighSchool;
