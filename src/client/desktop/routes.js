import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Login from "./modules/login/Login";
import CategoryProductsPage from "./pages/category/CategoryProductsPage";
import { CartContext } from "./cartContext/CartContext";
import SubjectsPage from "./pages/subjects/SubjectsPage";

const Routes = props => {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Switch>
        <CartContext.Provider value={{ cart, setCart }}>
          <Route path="/login" component={Login} />
          <Route path="/" exact component={HomePage} />
          <Route path="/subjects/:year" exact component={SubjectsPage} />
          <Route path="/category/:slug" component={CategoryProductsPage} />
        </CartContext.Provider>
      </Switch>
    </Router>
  );
};

Routes.propTypes = {};

export default Routes;
