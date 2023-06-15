import { useState } from "react";
import CartItems from "./2.Cart-Items.jsx";

const ProductView = () => {
  const [products, setProducts] = useState([]);
  
  const onAddNewProduct = () => {
    setProducts((prevState) => {
      return [
        ...prevState,
        {
          name: "ABC"+Math.floor(Math.random() * 10) + 1,
          price: Math.floor(Math.random() * 200) + 1,
        },
      ];
    });
  };


  console.log("Products: ", products);
  return (
    <div>
      <button onClick={onAddNewProduct}>Add Product</button>
      <CartItems passData={products}/>

      {/* <div>
        {products.name}
      </div>
      <div>{products.price}</div> */}
      {/* <input type="text" placeholder="Enter Product Name" onBlur={getProductName} />
      <input type="number" placeholder="Enter Price" onBlur={getProductPrice} /> */}
    </div>
    
  );
};

export default ProductView;
