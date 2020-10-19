import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./NavBarStyl.css";
import jwt_decode from "jwt-decode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

let user;

if (localStorage.getItem("jwt") === null) {
  user = null;
} else {
  user = jwt_decode(localStorage.getItem("jwt"));
}

function Exit() {
  localStorage.removeItem("jwt");
  window.location = '/login';
}

const NavBar = props => {
  return (
    <nav className="navbar_container">
        <div className="navbar_content">
            <div >
                <Link to="/" style={{ textDecoration: "none" }}>
                    <div className="navbarLogo">
                        <FontAwesomeIcon  icon={faGraduationCap} />
                        Ipon Web School</div>
                </Link>
            </div>
                {user ? (
                        <button
                            className="exit_button_content"
                            onClick={() => Exit()}
                        >
                            Изход
                        </button>

                ) : (
                    <div>
                        <Link
                            className="btn btn-secondary mb-2 mr-2"
                            role="button"
                            to="/registration"
                        >
                            Регистрация
                        </Link>
                        <Link
                            role="button"
                            to="/login"
                        >
                            Вход
                        </Link>
                    </div>
                )}
            </div>
    </nav>
  );
};

NavBar.propTypes = {};

export default NavBar;
