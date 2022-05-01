import {useState} from "react";
// import ProductList from "./product-list/ProductList";

function AddProduct({addProductToParent}) {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleChangeProductName = (e) => {
    setProductName(e.target.value);
  }

  const handleChangeQuantity = (e) => {
    setQuantity(e.target.value);
  }

  const handleAddProduct = (e) => {
    e.preventDefault();
    
    //if statement that checks if product details is empty or not
    if(productName !== "") {
      let prod = { name: productName, quantity: quantity };

      addProductToParent(prod); //put the data that you're sending to the parent component as an argument.
      return;
    }
    alert("Product name is empty");

    // if(productName === "") {
    //   alert("Product name is empty")
    // } else { 
    //   let prod = { name: productName, quantity: quantity };
    //   newProduct(prod);
    // }
  }

  return (
    <div className="card shadow">
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label>Product Name</label>
            <input type="text" name="productName" value={productName} className="form-control" onChange={handleChangeProductName} placeholder="Product Name" />
          </div>
          <div className="mb-3">
            <label>Quantity</label>
            <input type="number" name="quantity" value={quantity} className="form-control" onChange={handleChangeQuantity} placeholder="Quantity" />
          </div>
          <button onClick={handleAddProduct} className="btn btn-primary">Add Product</button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct;
