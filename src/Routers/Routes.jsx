import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import BestSelling from "../Components/BestSelling/BestSelling";
import NewestArrival from "../Components/NewestArrival/NewestArrival";
import NewArrival from "../Pages/NewArrivals/NewArrival";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement : <></>,
    
    hydrateFallbackElement : <span className="loading loading-bars loading-xl"></span>,
    children : [
      {
        path : '/',
        index : true,
        loader : ()=>fetch('shoes.json'),
        hydrateFallbackElement : <span className="loading loading-bars loading-xl"></span>,
        element : <Home></Home>
      },
      {
        path : '/new-arrival',
        element : <NewArrival></NewArrival>
      }
    ]
  },
  
]);
export default router;