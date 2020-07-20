import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const JuniorSchool = ({ junior }) => {
  return (
    <div className="grade_form">
      <div className="grade_title">Прогимназия</div>
      <div className="grade_number_form">
        {junior.map(({ grade }) => (
          <Link
            className="grade_number"
            to={`${window.location.pathname}/${grade}`}
          >
            {grade}. клас
          </Link>
        ))}
      </div>
    </div>
  );
};

JuniorSchool.propTypes = {};

export default JuniorSchool;
