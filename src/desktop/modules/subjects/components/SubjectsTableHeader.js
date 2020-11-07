import React from 'react';
import PropTypes from 'prop-types';
import SubjectTableHead from "./subjectsTableHead/SubjectTableHead";
import SubjectCss from "../Subjects.module.css";

const SubjectsTableHeader = props => {
    return (
        <SubjectTableHead>
            <tr>
                <th className={SubjectCss.header}>Предмет</th>
                <th className={SubjectCss.header}>Преподавател</th>
                <th className={SubjectCss.header}>Оценки от I-срок</th>
                <th className={SubjectCss.header}>Оценка за I-срок</th>
                <th className={SubjectCss.header}>Оценки от II-срок</th>
                <th className={SubjectCss.header}>Оценка за II-срок</th>
                <th className={SubjectCss.header}>Оценка за годината</th>
            </tr>
        </SubjectTableHead>
    );
};

SubjectsTableHeader.propTypes = {

};

export default SubjectsTableHeader;
