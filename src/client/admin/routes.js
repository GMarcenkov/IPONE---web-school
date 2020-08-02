import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UsersPage from "./pages/users/UsersPage";
import HomePage from "./pages/home/HomePage";
import ProductsPage from "./pages/products/producstPage/ProductsPage";
import ProductEditPage from "./pages/products/productEdit/ProductEditPage";
import ProductCreatePage from "./pages/products/productCreate/ProductCreatePage";
import CategoryPage from "./pages/category/CategoryPage";
import { AuthenticatedRoute } from "../helpers/guards/AuthenticatedRoute";
import YearsPage from "./pages/products/yearsPage/YearsPage";
import GradePage from "./pages/products/gradePage/GradePage";
import SubjectsPage from "./pages/products/subjectsPage/SubjectsPage";
import YearCreatePage from "./pages/products/yearCreatePage/YearCreatePage";

class AdminRoutes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <AuthenticatedRoute exact path="/admincp" component={HomePage} />
          <AuthenticatedRoute
            exact
            path="/admincp/users"
            component={UsersPage}
          />
          <AuthenticatedRoute
            exact
            path="/admincp/class"
            component={ProductsPage}
          />
          <AuthenticatedRoute
              exact
              path="/admincp/years"
              component={YearsPage}
          />
          <AuthenticatedRoute
              exact
              path="/admincp/grade/:year"
              component={GradePage}
          />
          <AuthenticatedRoute
              exact
              path="/admincp/grade/:year/:grade/:subGrade"
              component={SubjectsPage}
          />
          <AuthenticatedRoute
              exact
              path="/admincp/year/create"
              component={YearCreatePage}
          />
          <AuthenticatedRoute
            exact
            path="/admincp/product/edit"
            component={ProductEditPage}
          />
          <AuthenticatedRoute
            exact
            path="/admincp/product/create"
            component={ProductCreatePage}
          />
          <AuthenticatedRoute
            exact
            path="/admincp/category"
            component={CategoryPage}
          />

          <AuthenticatedRoute
            exact
            path="/admincp/product/edit/:id"
            component={ProductEditPage}
          />
        </Switch>
      </Router>
    );
  }
}

export default AdminRoutes;
