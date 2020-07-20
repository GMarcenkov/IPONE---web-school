import React from "react";
import axios from "axios";
import ProductTableList from "./components/ProductTableList";
import "./createProduct.css";
import { Link } from "react-router-dom";

class ProductsListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }
  componentDidMount() {
    this.handleGetProducts();
  }
  handleGetProducts = () => {
    axios
      .get("http://localhost:5000/products/")
      .then(response => {
        this.setState({
          products: response.data
        });
      })
      .catch(function(error) {});
  };

  deleteProduct = id => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/products/delete/${id}`)
      .then(response => {
        console.log("ss", response);
        this.handleGetProducts();
      })
      .catch(function(error) {});
  };

  render() {
    const { products } = this.state;
    return (
      <div>
        <div className="createProduct">
          <Link to="/admincp/product/create">Създай продукт</Link>
        </div>

        <ProductTableList
          products={products}
          deleteProduct={this.deleteProduct}
        />
      </div>
    );
  }
}

ProductsListContainer.propTypes = {};

export default ProductsListContainer;
