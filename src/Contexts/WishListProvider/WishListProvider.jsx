import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  // 1. Load from LocalStorage
  const [wishlistItems, setWishlistItems] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  // 2. Save to LocalStorage
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // --- ACTIONS ---

  const addToWishlist = (product) => {
    setWishlistItems((prev) => {
      // Prevent duplicates
      if (prev.find(item => item.product_id === product.product_id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((prev) => prev.filter((item) => item.product_id !== productId));
  };

  const toggleWishlist = (product) => {
    const exists = wishlistItems.find((item) => item.product_id === product.product_id);
    if (exists) {
      removeFromWishlist(product.product_id);
    } else {
      addToWishlist(product);
    }
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item.product_id === productId);
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, toggleWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWishlist = () => useContext(WishlistContext);