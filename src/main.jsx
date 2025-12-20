import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './Routers/Routes.jsx'
import { CartProvider } from './Contexts/CartProvider/CartProvider.jsx'
import { WishlistProvider } from './Contexts/WishListProvider/WishListProvider.jsx'
import AuthProvier from './Contexts/AuthProvider/AuthProvier.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvier>
      <CartProvider>
      <WishlistProvider>
        <RouterProvider router={router}></RouterProvider>
      </WishlistProvider>
    </CartProvider>
    </AuthProvier>
  </StrictMode>,
)
