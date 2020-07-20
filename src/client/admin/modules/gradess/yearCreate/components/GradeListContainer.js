import React from "react";
import PropTypes from "prop-types";
import YearCreate from "./YearCreate.module.css";
import AllGradeList from "./listAllGrades/AllGradeList";

const GradeListContainer = ({ schoolYear, handleEditGrade }) => {
  return (
    <div className={YearCreate.year_list_container}>
      <div className={YearCreate.grade_list_form}>
        <div className={YearCreate.year_create_title}>Класове</div>
        <div>
          <AllGradeList
            title={"Начален етап"}
            handleEditGrade={handleEditGrade}
            schoolYear={schoolYear.juniorSchool}
            grades={[1, 2, 3, 4]}
          />
        </div>
        <div>
          <AllGradeList
            handleEditGrade={handleEditGrade}
            title={"Прогимназия"}
            schoolYear={schoolYear.interSchool}
            grades={[5, 6, 7]}
          />
        </div>
        <div>
          <AllGradeList
            handleEditGrade={handleEditGrade}
            title={"Гимназиален курс"}
            schoolYear={schoolYear.highSchool}
            grades={[8, 9, 10, 11, 12]}
          />
        </div>
      </div>
    </div>
  );
};

GradeListContainer.propTypes = {};

export default GradeListContainer;
