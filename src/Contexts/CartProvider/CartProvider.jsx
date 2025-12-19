import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 1. Load from LocalStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 2. Save to LocalStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // --- 3. FIX: ROBUST ADD TO CART LOGIC ---
  const addToCart = (product, size, color) => {
    setCartItems((prevItems) => {
      // Check if item exists (Convert IDs to strings to ensure "1" == 1)
      const existingItem = prevItems.find((item) => 
        String(item.product_id) === String(product.product_id) && 
        item.size === size && 
        item.color === color
      );

      if (existingItem) {
        // SCENARIO A: Item exists -> Update Quantity
        return prevItems.map((item) =>
          String(item.product_id) === String(product.product_id) && 
          item.size === size && 
          item.color === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // SCENARIO B: New Item -> Add to list
        return [
          ...prevItems,
          {
            ...product,
            size,   // Save selected size
            color,  // Save selected color
            quantity: 1,
            // Ensure we save a specific image to show in the cart
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
            if (newQty < 1) return item; // Prevent 0 quantity
            return { ...item, quantity: newQty };
        }
        return item;
    }));
  };

  const getCartCount = () => {
      return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);