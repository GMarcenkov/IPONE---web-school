import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./NavBarStyl.css";
import jwt_decode from "jwt-decode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

let user;

if (localStorage.getItem("jwt") === null) {
  console.log('nema')
  user = null;
} else {
  console.log('ima')
  user = jwt_decode(localStorage.getItem("jwt"));
}
console.log(user)
function Exit() {
  localStorage.removeItem("jwt");
  window.location = "/login";
}

const NavBar = props => {
  return (
    <nav className="navbar_container">
      {user ? (
        <div className="navbar_content">
          <Link to="/" className="icon">
            <FontAwesomeIcon icon={faGraduationCap} />
          </Link>
          <Link to="/profile" className="icon">
            <FontAwesomeIcon icon={faUserCircle} />
          </Link>
          <Link to="/statistics" className="icon">
            <FontAwesomeIcon icon={faChartLine} />
          </Link>
          <button className="exit_button_content" onClick={() => Exit()}>
            Изход
          </button>
        </div>
      ) : (
        <div className="navbar_content">
          <Link role="button" to="/login">
            Вход
          </Link>
        </div>
      )}
    </nav>
  );
};

NavBar.propTypes = {};

export default NavBar;
