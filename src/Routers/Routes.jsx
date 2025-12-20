import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import BestSelling from "../Components/BestSelling/BestSelling";
import NewestArrival from "../Components/NewestArrival/NewestArrival";
import NewArrival from "../Pages/NewArrivals/NewArrival";
import Home from "../Pages/Home/Home";
import Categories from "../Components/Categories/Categories";
import LoadingScreen from "../Pages/LoadingScreen/LoadingScreen";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import TopSelling from "../Pages/TopSelling/TopSelling";
import Collection from "../Pages/Collection/Collection";
import ProductDetail from "../Components/ProductDetail/ProductDetail";
import CategorizedProduct from "../Components/CategorizedProduct/CategorizedProduct";
import Cart from "../Pages/Cart/Cart";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Checkout from "../Components/Checkout/Checkout";
import PrivateRouter from "../Contexts/PrivateRouter/PrivateRouter";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <span className="loading loading-bars loading-xl"></span>,
    children: [
      {
        path: '/',
        index: true,
        loader: () => fetch('shoes.json'),
        hydrateFallbackElement: <LoadingScreen></LoadingScreen>,
        element: <Home></Home>,

      },
      {
        path: '/new-arrival',
        loader: () => fetch('shoes.json'),
        hydrateFallbackElement: <LoadingScreen></LoadingScreen>,
        element: <NewArrival></NewArrival>
      },
      {
        path: '/best-selling',
        loader: () => fetch('shoes.json'),
        hydrateFallbackElement: <LoadingScreen></LoadingScreen>,
        element: <TopSelling></TopSelling>
      },
      {
        path: '/collections',
        loader: () => fetch('shoes.json'),
        hydrateFallbackElement: <LoadingScreen></LoadingScreen>,
        element: <Collection></Collection>
      },
      {
        path: 'products/:id',
        loader: () => fetch('/shoes.json'),
        hydrateFallbackElement: <LoadingScreen></LoadingScreen>,
        element: <ProductDetail></ProductDetail>

      },
      {
        path: 'category/:categoryName',
        loader: () => fetch('shoes.json'),
        hydrateFallbackElement: <LoadingScreen></LoadingScreen>,
        element: <CategorizedProduct></CategorizedProduct>
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      },
      {
        path: '/wishlist',
        loader: () => fetch('shoes.json'),
        hydrateFallbackElement: <LoadingScreen></LoadingScreen>,
        element: <Wishlist></Wishlist>
      },
      {
        path : "/checkout",
        element : <PrivateRouter><Checkout></Checkout></PrivateRouter>
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  }


]);
export default router;