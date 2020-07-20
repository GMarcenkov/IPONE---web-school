import React from "react";
import axios from "axios";
import "./components/ProductContainer.css";
import ProductList from "./components/ProductList";

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }
  componentDidMount() {
    this.handleGetProducts();
  }
  handleGetProducts = async () => {
    axios
      .get("http://localhost:5000/products/")
      .then(response => {
        this.setState({ products: response.data.slice(0, 9).reverse() });
      })
      .catch(function(error) {});
  };
  render() {
    const { products } = this.state;
    return (
      <div>
        <label>Най-нови продукти:</label>
        <div className="row">
          {products.map(product => {
            return <ProductList product={product} />;
          })}
        </div>
      </div>
    );
  }
}

ProductsContainer.propTypes = {};

export default ProductsContainer;
