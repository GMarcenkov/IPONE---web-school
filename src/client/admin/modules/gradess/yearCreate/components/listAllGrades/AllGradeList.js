import React from "react";
import PropTypes from "prop-types";
import Grade from "./AllGradeList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const AllGradeList = ({ title, numbers, grades, handleTakeGrade }) => {
  return (
    <div className={Grade.school_level}>
      <div className={Grade.grades_title}>{title}</div>
      <div>
        {numbers.map(number => (
          <div>
            <div className={Grade.grades_title}>{number}. клас</div>
            <table className={Grade.grade_level}>
              <tbody>
                {grades.map(grade =>
                  grade.subGrades.map(subGrade => (
                    <React.Fragment>
                      {number === grade.grade ? (
                        <tr className={Grade.list_row}>
                          <td>
                            {grade.grade}{" "}
                            {subGrade.subGrade === "a" ? "А" : null}
                            {subGrade.subGrade === "b" ? "Б" : null}
                            {subGrade.subGrade === "v" ? "В" : null}
                            {subGrade.subGrade === "g" ? "Г" : null}
                            {subGrade.subGrade === "d" ? "Д" : null}
                            {subGrade.subGrade === "e" ? "Е" : null}
                          </td>
                          <td>{subGrade.teacher}</td>
                          <td>
                            <FontAwesomeIcon
                              onClick={() =>
                                handleTakeGrade(
                                  grade,
                                  subGrade.subGrade,
                                  subGrade.teacher,
                                  subGrade.students
                                )
                              }
                              className={Grade.edit_icon}
                              icon={faEdit}
                            />
                          </td>
                        </tr>
                      ) : null}
                    </React.Fragment>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

AllGradeList.propTypes = {};

export default AllGradeList;
