import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserSlash} from "@fortawesome/free-solid-svg-icons";
import StudentTableRow
    from "../../../../admin/modules/gradess/yearCreate/components/addStudents/components/studentsTableRow/StudentTableRow";

const SubjectsTableRow = ({}) => {
    return (
        <SubjectsTableRow>
            {/*<td className="stu_name">{student.name}</td>*/}
            {/*<td className="stu_secondName">{student.secondName}</td>*/}
            {/*<td className="stu_familyName">{student.familyName}</td>*/}
            {/*<td className="stu_pin">{student.username}</td>*/}
            {/*<td className="stu_phone">{student.phone}</td>*/}
            {/*<td className="stu_email">{student.email}</td>*/}
            {/*<td>*/}
            {/*    {" "}*/}
            {/*    <FontAwesomeIcon*/}
            {/*        className="stu_delete"*/}
            {/*        onClick={() => handleDeleteStudent(student._id)}*/}
            {/*        icon={faUserSlash}*/}
            {/*    />*/}
            {/*</td>*/}
        </SubjectsTableRow>
    );
};

SubjectsTableRow.propTypes = {

};

export default SubjectsTableRow;
