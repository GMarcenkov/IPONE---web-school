import React from "react";
import PropTypes from "prop-types";
import YearCreate from "./YearCreate.module.css";
import Grade from "./createGrade/CreateGrade.module.css";
import CreateGrade from "./createGrade/CreateGrade";
import AddStudents from "./addStudents/AddStudents";

const CreateGradeContainer = ({
  yearFrom,
  yearTo,
  handleEditGrade,
  handleDeleteStudent,
  teacher,
  editModel,
  grade,
  subGrade,
  users,
  students,
  filterByName,
  addStudent,
  search,
  handleAddStudent,
  handleInput,
  handleChangeFilter,
  handleSearch,
  handleCreateGrade
}) => {
  return (
    <div className={YearCreate.year_create_container}>
      <div className={YearCreate.year_create_title}>Създаване на клас</div>
      <div className={YearCreate.year_create_form}>
        <CreateGrade
          handleInput={handleInput}
          teacher={teacher}
          grade={grade}
          subGrade={subGrade}
        />
        <AddStudents
          handleDeleteStudent={handleDeleteStudent}
          users={users}
          students={students}
          handleAddStudent={handleAddStudent}
          handleChangeFilter={handleChangeFilter}
          handleSearch={handleSearch}
          addStudent={addStudent}
          filterByName={filterByName}
          search={search}
        />
        <div className={Grade.button_add_container}>
          {editModel ? (
            <div className={Grade.button_edit_form}>
              <button
                className={Grade.add_grade}
                onClick={() => handleEditGrade()}
              >
                Редактирай
              </button>
              <button
                className={Grade.add_grade}
                onClick={() => handleCreateGrade()}
              >
                Изтрий
              </button>
            </div>
          ) : (
            <div>
              <button
                className={Grade.add_grade}
                onClick={() => handleCreateGrade()}
              >
                Създай
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

CreateGradeContainer.propTypes = {};

export default CreateGradeContainer;
