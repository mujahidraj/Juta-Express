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
        loader: () => fetch('shoes.json'),
        hydrateFallbackElement: <LoadingScreen></LoadingScreen>,
        element: <ProductDetail></ProductDetail>

      }
    ]
  },

]);
export default router;