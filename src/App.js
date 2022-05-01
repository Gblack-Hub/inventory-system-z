import { useState} from "react";
import './App.css';
import AddProduct from "./components/AddProduct";
import ProductList from "./components/product-list/ProductList";

function App() {
  const [allProducts, setAllProducts] = useState([]);

  function collectNewProduct(newProduct) { //collect data from the intermediary as a parameter

    let isElementAlreadyAdded = Boolean(allProducts.find(item => item.name === newProduct.name));
    
    if(isElementAlreadyAdded) {
      alert("Product already exist!");
    } else {
      setAllProducts([...allProducts, newProduct]); //add new element (object) to the existing array using array destructuring method
    }
  }

  function removeItemByIndex(ind) {

    let updatedProducts = allProducts.filter((item, index) => index !== ind); //return all element whose index/key isn't equal to the provided index
    setAllProducts(updatedProducts);
  }

  return (
    <div className="container">
      <h2 className="text-center mb-3">Inventory Management App</h2>
      <AddProduct addProductToParent={collectNewProduct} />
      <ProductList products={allProducts} removeItemByIndex={removeItemByIndex} />
    </div>
  );
}

export default App;
