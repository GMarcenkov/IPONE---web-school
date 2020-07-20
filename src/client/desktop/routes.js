import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsPage from "./pages/news/News";

import BlogPage from "./pages/blog/BlogPage";

import HomePage from "./pages/home/HomePage";
import Register from "./modules/registration/Register";
import Login from "./modules/login/Login";

import CategoryProductsPage from "./pages/category/CategoryProductsPage";
import { CartContext } from "./cartContext/CartContext";
import CartPage from "./pages/cart/CartPage";

const Routes = props => {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Switch>
        <CartContext.Provider value={{ cart, setCart }}>
          <Route path="/" exact component={HomePage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/category/:slug" component={CategoryProductsPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/registration" component={Register} />
          <Route path="/login" component={Login} />
        </CartContext.Provider>
      </Switch>
    </Router>
  );
};

Routes.propTypes = {};

export default Routes;
