import React from "react";
import YearCreate from "./Year.module.css";
import PropTypes from "prop-types";

const Year = ({ yearFrom, yearTo, handleInput, handleCreateSchoolYear }) => {
  return (
    <div className={YearCreate.year_container}>
      <button
        className={YearCreate.button_create_year}
        onClick={() => handleCreateSchoolYear()}
      >
        Създай учебната година
      </button>
      <div>
        <div>ОТ:</div>
        <input
          className={YearCreate.form_year}
          name="yearFrom"
          type="number"
          onChange={handleInput}
          value={yearFrom}
        />
        {/*<div style={{ color: "red" }}>*/}
        {/*    {errors.sku ? errors.sku : ""}*/}
        {/*</div>*/}
      </div>
      <div className={YearCreate.year_split}>/</div>
      <div className="form_body">
        <div>ДО:</div>
        <input
          className="form_year"
          name="yearTo"
          type="number"
          onChange={handleInput}
          value={yearTo}
        />
        {/*<div style={{ color: "red" }}>*/}
        {/*    {errors.sku ? errors.sku : ""}*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

Year.propTypes = {};

export default Year;
