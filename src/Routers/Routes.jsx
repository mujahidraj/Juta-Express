import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import BestSelling from "../Components/BestSelling/BestSelling";
import NewestArrival from "../Components/NewestArrival/NewestArrival";
import NewArrival from "../Pages/NewArrivals/NewArrival";
import Home from "../Pages/Home/Home";
import Categories from "../Components/Categories/Categories";
import LoadingScreen from "../Pages/LoadingScreen/LoadingScreen";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement : <span className="loading loading-bars loading-xl"></span>,
    children : [
      {
        path : '/',
        index : true,
        loader : ()=>fetch('shoes.json'),
        hydrateFallbackElement : <LoadingScreen></LoadingScreen>,
        element : <Home></Home>,
        
      },
      {
        path : '/new-arrival',
        element : <NewArrival></NewArrival>
      },
      {
        path : '/best-selling',
        element : <div>I am best selling</div>
      },
      {
        path : '/category',
        element : <div> i am all</div>
      }
    ]
  },
  
]);
export default router;