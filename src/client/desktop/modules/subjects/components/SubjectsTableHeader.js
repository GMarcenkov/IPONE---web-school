import React from 'react';
import PropTypes from 'prop-types';
import SubjectTableHead from "./subjectsTableHead/SubjectTableHead";

const SubjectsTableHeader = props => {
    return (
        <SubjectTableHead>
            <tr>
                <th>Предмет</th>
                <th>Преподавател</th>
                <th>Оценки от I-срок</th>
                <th>Оценки от II-срок</th>
                <th>Крайна Оценка</th>
                <th>Ср. Арит. за годината</th>
            </tr>
        </SubjectTableHead>
    );
};

SubjectsTableHeader.propTypes = {

};

export default SubjectsTableHeader;