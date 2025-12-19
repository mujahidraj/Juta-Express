import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './Routers/Routes.jsx'
import { CartProvider } from './Contexts/CartProvider/CartProvider.jsx'
import { WishlistProvider } from './Contexts/WishListProvider/WishListProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <WishlistProvider>
        <RouterProvider router={router}></RouterProvider>
      </WishlistProvider>
    </CartProvider>
  </StrictMode>,
)
