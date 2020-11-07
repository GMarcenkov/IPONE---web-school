import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Profile from "./Profile.module.css";

const ProfileInfo = ({
  user,
  IsEditPhone,
  IsEditEmail,
  handleEdit,
  handleInput,
  newPassword,
  oldPassword,
  phone,
  email
}) => {
  return (
    <div>
      <div className={Profile.profile_container}>
        <FontAwesomeIcon className={Profile.user_icon} icon={faUserCircle} />
        <div className={Profile.user_info_container}>
          <div className={Profile.user_name_container}>
            <div className={Profile.user_names}>{user.name}</div>
            <div className={Profile.user_names}>{user.secondName}</div>
            <div className={Profile.user_names}>{user.familyName}</div>
          </div>
          <div className={Profile.user_communication}>
            <div className={Profile.user_label}>Телефон:</div>
            {IsEditPhone ? (
              <div className={Profile.user_names}>
                <input
                  onChange={handleInput}
                  name="phone"
                  className={Profile.password_input}
                  value={phone}
                />
                <FontAwesomeIcon
                  onClick={() => handleEdit("phone")}
                  className={Profile.edit_icon}
                  icon={faCheck}
                />
              </div>
            ) : (
              <div className={Profile.user_names}>
                {user.phone}{" "}
                <FontAwesomeIcon
                  onClick={() => handleEdit("phone", user.phone)}
                  className={Profile.edit_button}
                  icon={faPen}
                />
              </div>
            )}
          </div>
          <div className={Profile.user_communication}>
            <div className={Profile.user_label}>Имейл:</div>
            <div className={Profile.user_names}>
              {IsEditEmail ? (
                <div className={Profile.user_names}>
                  <input
                    onChange={handleInput}
                    name="email"
                    className={Profile.password_input}
                    value={email}
                  />
                  <FontAwesomeIcon
                    onClick={() => handleEdit("email")}
                    className={Profile.edit_icon}
                    icon={faCheck}
                  />
                </div>
              ) : (
                <div className={Profile.user_names}>
                  {user.email}{" "}
                  <FontAwesomeIcon
                    onClick={() => handleEdit("email", user.email)}
                    className={Profile.edit_button}
                    icon={faPen}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={Profile.password_form}>
        <h1 className={Profile.user_names}>Смяна на паролата</h1>
        <div className={Profile.user_communication}>
          <label className={Profile.user_label}>Стара Парола: </label>
          <input
            className={Profile.password_input}
            type="password"
            name="oldPassword"
            onChange={handleInput}
            value={oldPassword}
          />
        </div>
        <div className={Profile.user_communication}>
          <label className={Profile.user_label}>Нова Парола: </label>
          <input
            className={Profile.password_input}
            type="password"
            name="newPassword"
            onChange={handleInput}
            value={newPassword}
          />
        </div>

        <button className={Profile.confirm_button}>Запази</button>
      </div>
    </div>
  );
};

ProfileInfo.propTypes = {};

export default ProfileInfo;
