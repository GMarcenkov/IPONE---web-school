import React from "react";
import Grade from "./CreateGrade.module.css";
import PropTypes from "prop-types";
import YearCreate from "../year/Year.module.css";

const CreateGrade = ({ subGrade, grade, teacher, handleInput }) => {
  return (
    <div className={Grade.input_container}>
      <div>
        <div className={Grade.input_title}>Клас</div>
        <select
          className={Grade.input_content}
          name="grade"
          onChange={handleInput}
          value={grade}
        >
          <option value={1}>1 клас</option>
          <option value={2}>2 клас</option>
          <option value={3}>3 клас</option>
          <option value={4}>4 клас</option>
          <option value={5}>5 клас</option>
          <option value={6}>6 клас</option>
          <option value={7}>7 клас</option>
          <option value={8}>8 клас</option>
          <option value={9}>9 клас</option>
          <option value={10}>10 клас</option>
          <option value={11}>11 клас</option>
          <option value={12}>12 клас</option>
        </select>
      </div>
      {/*<div style={{ color: "red" }}>*/}
      {/*    {errors.quantity ? errors.quantity : ""}*/}
      {/*</div>*/}
      <div>
        <div className={Grade.input_title}>Подклас</div>
        <select
          className={Grade.input_content}
          onChange={handleInput}
          value={subGrade}
          name="subGrade"
        >
          <option value={"a"}>А</option>
          <option value={"b"}>Б</option>
          <option value={"v"}>В</option>
          <option value={"g"}>Г</option>
          <option value={"d"}>Д</option>
          <option value={"e"}>Е</option>
        </select>

        {/*<div style={{ color: "red" }}>*/}
        {/*    {errors.quantity ? errors.quantity : ""}*/}
        {/*</div>*/}
      </div>
      <div>
        <div className={Grade.input_title}>Класен ръководител :</div>
        <input
          className={Grade.teacher_input}
          name="teacher"
          type="text"
          onChange={handleInput}
          value={teacher}
        />
        {/*<div style={{ color: "red" }}>*/}
        {/*    {errors.quantity ? errors.quantity : ""}*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

CreateGrade.propTypes = {};

export default CreateGrade;
