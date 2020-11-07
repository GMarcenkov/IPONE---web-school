import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Login from "./modules/login/Login";
import CategoryProductsPage from "./pages/category/CategoryProductsPage";
import SubjectsPage from "./pages/subjects/SubjectsPage";
import ContactsPage from "./pages/contacts/ContactsPage";
import NotFoundPage from "./pages/404/NotFoundPage";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";
import StatisticsPage from "./pages/statistics/StatisticsPage";
import TeamPage from "./pages/team/TeamPage";

const Routes = props => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/subjects/:year" exact component={SubjectsPage} />
        {/*<Route path="/category/:slug" exact component={CategoryProductsPage} />*/}
        <Route path="/login" exact component={LoginPage} />
        <Route path="/profile" exact component={ProfilePage} />
        <Route path="/analytics" exact component={LoginPage} />
        <Route path="/contacts" exact component={ContactsPage} />
        <Route path="/developers" exact component={TeamPage} />
        <Route path="/statistics" exact component={StatisticsPage} />
      </Switch>
    </Router>
  );
};

Routes.propTypes = {};

export default Routes;
