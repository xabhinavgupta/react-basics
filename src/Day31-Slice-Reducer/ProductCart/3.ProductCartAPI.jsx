import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeData, storeCart } from "./ProductSlice";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductLists = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      dispatch(storeData(response.data));
    });
  }, []);

  const product = useSelector((state) => state.storeSlice.product);
  const cartt = useSelector((state) => state.storeSlice.cart);
  console.log(cartt);
  console.log(product);

  return (
    <div>
      <Link to={`/showCart`}>
        <button>View Cart</button>
      </Link>
      <ul>
        {product.map((item) => {
          return (
            <li key={item.id}>
              {item.title}
              <button onClick={() => dispatch(storeCart(item.id))}>
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