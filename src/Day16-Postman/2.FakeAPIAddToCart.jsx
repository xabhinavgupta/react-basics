import { useState, useEffect } from 'react';

const FakeApiResponse = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch item details from API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.log(error));
  }, []);

  // Add item to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      
      <h2>Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <strong>{item.title}</strong> - ${item.price}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      
      <h2>Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <strong>{item.title}</strong> - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FakeApiResponse;
