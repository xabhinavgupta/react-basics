import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeAPIData, storeAddToCart } from "./2.ProductsStore";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductLists = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      dispatch(storeAPIData(response.data));
    });
  }, [dispatch]);

  const product = useSelector((state) => state.storeSlice.product);
  const cart = useSelector((state) => state.storeSlice.cart);
  console.log(cart);
  console.log(product);

  return (
    <div>
      <Link to={`/showcart`}>
        <button>View Cart</button>
      </Link>
      <ul>
        {product.map((item) => {
          return (
            <li key={item.id}>
              {item.title}
              <button onClick={() => dispatch(storeAddToCart(item))}>
                Add To Cart
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductLists;