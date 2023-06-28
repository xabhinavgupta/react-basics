import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);

  if (!products) {
    return <p>Please wait, while we are loading product</p>;
  }

  return (
    <div>
      <h1>My Products</h1>
      {products.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>₹ {item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
