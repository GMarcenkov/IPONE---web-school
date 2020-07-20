import React from "react";
import PropTypes from "prop-types";
import Grade from "./AllGradeList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const AllGradeList = ({ title, schoolYear, grades, handleEditGrade }) => {
  return (
    <div className={Grade.school_level}>
      <div className={Grade.grades_title}>{title}</div>
      <div>
        {grades.map(grade => (
          <div>
            <div className={Grade.grades_title}>{grade}. клас</div>
            <table className={Grade.grade_level}>
              <tbody>
                {schoolYear.map(subGrade => (
                  <React.Fragment>
                    {subGrade.grade === grade ? (
                      <tr className={Grade.list_row}>
                        <td>
                          {subGrade.grade}{" "}
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
                              handleEditGrade(subGrade.grade, subGrade.subGrade)
                            }
                            className={Grade.edit_icon}
                            icon={faEdit}
                          />
                        </td>
                      </tr>
                    ) : (
                      ""
                    )}
                  </React.Fragment>
                ))}
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
