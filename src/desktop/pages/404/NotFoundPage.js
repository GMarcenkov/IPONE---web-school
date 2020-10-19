import React from "react";
import { Link } from "react-router-dom";
import NotFoundCSS from "./NotFoundPage.module.css";

const NotFoundPage = (props) => {
  return (
    <>
      <div className={NotFoundCSS.mainbox}>
        <div className={NotFoundCSS.err}>4</div>
        <div className={NotFoundCSS.err0}>0</div>
        <div className={NotFoundCSS.err2}>4</div>
        <div className={NotFoundCSS.msg}>
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            Let's go{" "}
            <Link to="/" className={NotFoundCSS.home}>
              Home
            </Link>{" "}
            and try from there.
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
