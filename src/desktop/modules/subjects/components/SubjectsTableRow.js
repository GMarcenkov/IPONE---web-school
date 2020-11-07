import React from "react";
import PropTypes from "prop-types";
import SubjectTableRow from "./subjectsTableRow/SubjectTableRow";
import Header from "./subjectsTableRow/SubjectTableRow.module.css";

const SubjectsTableRow = ({ schoolYear, subject }) => {
  return (
    <SubjectTableRow>
      <td className={Header.subject_title}>{subject.title}</td>
      <td className={Header.teacher}>
        {subject.teacher.name} {subject.teacher.familyName}
      </td>
      {subject.rate.ratingsFirstHalf[0] === "" ? (
          <td></td>
        ) : (
          <td className={Header.term}>
            {subject.rate.ratingsFirstHalf.map(rate => (
              <div className={Header.rates}>{rate}</div>
            ))}
          </td>
        )
      }

      <td className={Header.half}>{subject.rate.rateFirstHalf}</td>

      {subject.rate.ratingsSecondHalf[0] === "" ? (
        <td></td>
      ) : (
        <td className={Header.term}>
          {subject.rate.ratingsSecondHalf.map(rate => (
            <div className={Header.rates}>{rate}</div>
          ))}
        </td>
      )}
      <td className={Header.half}>{subject.rate.rateSecondHalf}</td>
      <td className={Header.finalRate}>{subject.rate.rateForYear}</td>
    </SubjectTableRow>
  );
};

SubjectsTableRow.propTypes = {};

export default SubjectsTableRow;
