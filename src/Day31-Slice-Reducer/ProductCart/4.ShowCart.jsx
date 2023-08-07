import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ShowCart = () => {
  const product = useSelector((state) => state.storeSlice.product);
  const cart = useSelector((state) => state.storeSlice.cart);
  const cartData = useMemo(() => {
    const tempCart = cart.map((cartItem) => {
      const prodData = product.filter((prod) => prod.id === cartItem);
      return prodData[0];
    });
    return tempCart;
  }, [product, cart]);
  return (
    <div>
      <Link to={`/`}>
        <button>Home</button>
      </Link>
      <ul>
        {cartData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShowCart;