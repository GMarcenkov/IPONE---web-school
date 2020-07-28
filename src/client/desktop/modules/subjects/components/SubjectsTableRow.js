import React from "react";
import PropTypes from "prop-types";
import SubjectTableRow from "./subjectsTableRow/SubjectTableRow";
import Header from './subjectsTableRow/SubjectTableRow.module.css';

const SubjectsTableRow = ({schoolYear, subject }) => {
  return (
    <SubjectTableRow>
      <td className={Header.subject_title}>{subject.subject}{" "}{schoolYear.grade} клас</td>
      <td className={Header.teacher}>{subject.teacher}</td>
      <td className={Header.term}>{subject.rateFirstTerm+" "}</td>
      <td className={Header.term}>{subject.rateSecondTerm+" "}</td>
      <td className={Header.finalRate}>{subject.finalRate}</td>
      <td className={Header.averageRate}>{subject.average}</td>
    </SubjectTableRow>
  );
};

SubjectsTableRow.propTypes = {};

export default SubjectsTableRow;
