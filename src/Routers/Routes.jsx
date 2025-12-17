import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement : <></>,
    loader : ()=>fetch('shoes.json'),
    hydrateFallbackElement : <span className="loading loading-bars loading-xl"></span>

  },
  
]);
export default router;