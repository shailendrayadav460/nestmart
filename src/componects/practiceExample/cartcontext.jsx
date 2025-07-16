import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
  setCartItems([...cartItems, { ...item, quantity: 1 }]);
};

const removeFromCart = (id) => {
  setCartItems( cartItems.filter((item) => item.id !== id));
};

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext; 




