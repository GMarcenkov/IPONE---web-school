import React from 'react';
import PropTypes from 'prop-types';
import UsersTableHead from "../usersTableHead/UsersTableHead";

const UsersTableHeader = props => {
    return (
        <UsersTableHead>
            <tr>
                <th>
                    Име
                </th>
                <th>
                    Дата на създаване
                </th>
                <th>
                    Действия
                </th>
            </tr>
        </UsersTableHead>
    );
};

UsersTableHeader.propTypes = {

};

export default UsersTableHeader;
