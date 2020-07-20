import React from "react";
import UserTableRow from "../userTableRow/UserTableRow";
import Timestamp from "react-timestamp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
const UsersTableRow = ({ user, deleteUser,editUser }) => {
  return (
    <UserTableRow>
      <td className="username">{user.username}</td>
      <td className="date">
        {" "}
        <Timestamp date={user.createdAt} />
      </td>
      <td className="action">
        <FontAwesomeIcon
          className="delete_user"
          icon={faTrash}
          onClick={() => deleteUser(user._id)}
        />
        <FontAwesomeIcon className="edit_user" icon={faEdit} onClick={()=>{editUser(user._id)}}/>
      </td>
    </UserTableRow>
  );
};

UsersTableRow.propTypes = {};

export default UsersTableRow;
