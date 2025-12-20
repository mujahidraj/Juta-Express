import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, size, color) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) =>
        String(item.product_id) === String(product.product_id) &&
        item.size === size &&
        item.color === color
      );

      if (existingItem) {
        return prevItems.map((item) =>
          String(item.product_id) === String(product.product_id) &&
            item.size === size &&
            item.color === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prevItems,
          {
            ...product,
            size,
            color,
            quantity: 1,
            image: product.product_images ? product.product_images[0] : null
          }
        ];
      }
    });
  };

  const removeFromCart = (id, size, color) => {
    setCartItems((prev) =>
      prev.filter(item => !(String(item.product_id) === String(id) && item.size === size && item.color === color))
    );
  };

  const updateQuantity = (id, size, color, amount) => {
    setCartItems(prev => prev.map(item => {
      if (String(item.product_id) === String(id) && item.size === size && item.color === color) {
        const newQty = item.quantity + amount;
        if (newQty < 1) return item;
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  // --- NEW FUNCTION: Clears the cart state ---
  const clearCart = () => {
    setCartItems([]); // This resets state, and the useEffect above will sync it to localStorage automatically
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ 
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        getCartCount,
        clearCart // <--- Added here so Checkout page can access it
    }}>
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);