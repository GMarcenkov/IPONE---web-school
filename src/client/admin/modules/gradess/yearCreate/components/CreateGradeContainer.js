import React from "react";
import PropTypes from "prop-types";
import YearCreate from "./YearCreate.module.css";
import Grade from "./createGrade/CreateGrade.module.css";
import CreateGrade from "./createGrade/CreateGrade";
import AddStudents from "./addStudents/AddStudents";

const CreateGradeContainer = ({
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
  handleCreateGrade,
                                handleDeleteGrade
}) => {
  return (
    <div className={YearCreate.year_create_container}>
      <div className={YearCreate.year_create_title}>{
        editModel?"Редактиране на клас":" Създаване на клас"
      } </div>
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
        <div >
          {editModel ? (
            <div className={Grade.button_edit_form}>
              <button
                className={Grade.edit_grade}
                onClick={() => handleEditGrade()}
              >
                Редактирай
              </button>
              <button
                className={Grade.delete_grade}
                onClick={() => handleDeleteGrade()}
              >
                Изтрий
              </button>
            </div>
          ) : (
            <div className={Grade.button_add_container}>
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
