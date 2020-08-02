import React from "react";
import PropTypes from "prop-types";
import SubjectCardStyle from "./Subject.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

const SubjectCard = ({ subject }) => {
  return (
      <div className={SubjectCardStyle.subject_card}>
          <FontAwesomeIcon
              icon={faFolder}
              className={SubjectCardStyle.icon}
          />
              <div className={SubjectCardStyle.card_title}>
                  <div className={SubjectCardStyle.subject}>
                      {subject.subject}
                  </div>
                  <div className={SubjectCardStyle.teacher}>
                      <div style={{"text-align":"left"}}>
                          преподавател:
                      </div>
                          {subject.teacher}
                  </div>
              </div>
      </div>

  );
};

SubjectCard.propTypes = {};

export default SubjectCard;
