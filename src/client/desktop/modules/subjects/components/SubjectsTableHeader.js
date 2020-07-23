import React from 'react';
import PropTypes from 'prop-types';
import SubjectTableHead from "./subjectsTableHead/SubjectTableHead";

const SubjectsTableHeader = props => {
    return (
        <SubjectTableHead>
            <tr>
                <th>Име</th>
                <th>Презиме</th>
                <th>Фамилия</th>
                <th>ЕГН</th>
                <th>Телефон</th>
                <th>Имейл</th>
                <th>Действия</th>
            </tr>
        </SubjectTableHead>
    );
};

SubjectsTableHeader.propTypes = {

};

export default SubjectsTableHeader;
