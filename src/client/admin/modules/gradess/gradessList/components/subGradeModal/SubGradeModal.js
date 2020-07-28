import React from "react";
import "../Grade.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SubGradeModal = ({ modalIsOpen, openModal, subGrades, grade }) => {
  return (
    <div>
      {modalIsOpen ? (
        <div className="modal_wrapper">
          <div className="modal_container">
            <div className="modal_close_button" onClick={() => openModal()}>
              X
            </div>
            <div className="modal_subGrade_title">Изберете клас</div>
            <div className="modal_subGrade_form_content">
              <table>
                <tbody>
                  {subGrades.map(subGrade => (
                    <Link>
                      <tr className="modal_subGrade_row">
                        <td>
                          {grade}- {subGrade.subGrade === "a" ? "А" : null}
                          {subGrade.subGrade === "b" ? "Б" : null}
                          {subGrade.subGrade === "v" ? "В" : null}
                          {subGrade.subGrade === "g" ? "Г" : null}
                          {subGrade.subGrade === "d" ? "Д" : null}
                          {subGrade.subGrade === "e" ? "Е" : null}
                        </td>
                        <td>{subGrade.teacher}</td>
                      </tr>
                    </Link>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

SubGradeModal.propTypes = {};

export default SubGradeModal;
