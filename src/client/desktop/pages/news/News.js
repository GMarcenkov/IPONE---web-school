import React from "react";
import NewsContainer from "../../modules/news/NewsContainer";
import NavBar from "../../modules/layout/navBar/NavBar";

const NewsPage = props => {
  return (
    <div>
      <NavBar />
      <NewsContainer />
      <p> This is history page !</p>
    </div>
  );
};

NewsPage.propTypes = {};

export default NewsPage;
