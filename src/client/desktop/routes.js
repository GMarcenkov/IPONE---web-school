import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Login from "./modules/login/Login";
import CategoryProductsPage from "./pages/category/CategoryProductsPage";
import { CartContext } from "./cartContext/CartContext";
import SubjectsPage from "./pages/subjects/SubjectsPage";
import jwt_decode from "jwt-decode";

const Routes = props => {
    let user={}
    if(localStorage.getItem("jwt")){
         user = jwt_decode(localStorage.getItem("jwt"));
    }

    console.log(user)
  return (
    <Router>
      <Switch>
          <Route path="/" exact component={user.id===undefined?Login:HomePage}/>
          <Route path="/subjects/:year" exact component={SubjectsPage} />
          <Route path="/category/:slug" component={CategoryProductsPage} />
          <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

Routes.propTypes = {};

export default Routes;
