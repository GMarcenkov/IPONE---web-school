import React from "react";
import axios from "axios";
import ReactLoading from 'react-loading';
import ProductList from "../components/ProductList";
import CategoryProductsHeader from "./components/CategoryProductsHeader";

class CategoryProductsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        products: [],
        isLoading: true,
        category: ''
    }
  }
  componentDidMount() {
    this.handleGetProducts();
    this.handleGetCategory()
  }

  handleGetProducts = async () => {
    await axios
      .get("http://localhost:5000/products/")
      .then(response => {
        const category = window.location.pathname.slice(1).search("/") + 2;
        response.data.map(product =>  {
          if (product.category_slug === window.location.pathname.slice(category)) {
            this.state.products.push(product);
          }
        });
        this.setState({isLoading:false})
      })
      .catch(function(error) {});
  };
  handleGetCategory= async ()=>{
      await axios
          .get("http://localhost:5000/category/")
          .then(response => {
              const slug = window.location.pathname.slice(1).search("/") + 2;
              response.data.map(category =>  {
                  if (category.slug === window.location.pathname.slice(slug)) {
                      this.setState({category:category})
                  }
              });
              this.setState({isLoading:false})
          })
          .catch(function(error) {});
  }

  render() {
    const { products,category,isLoading } = this.state;
    if(isLoading===true){

      return <ReactLoading type={"spin"} color={"blue"} height={667} width={375} />
    }
    return (
      <div>
        <CategoryProductsHeader category={category}/>
        <div className="row">
          {products.map(product => {
            return (
                <ProductList product={product}/>
            );
          })}
        </div>

      </div>
    );
  }
}

CategoryProductsContainer.propTypes = {};

export default CategoryProductsContainer;
