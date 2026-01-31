import { createBrowserRouter } from "react-router";
import { client } from "../sanityClient"; 

// Layouts & Components
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
import Payment from "../Pages/Payment/Payment";

// 1. THE STRUCTURE (Your JSON format)
const productFields = `
  product_id,
  product_name,
  brand_name,
  category,
  "product_images": coalesce(product_images[].asset->url, external_image_urls),
  product_video,
  price,
  available_sizes,
  available_colors,
  stock_status,
  sku,
  shoe_type,
  material,
  weight,
  heel_type,
  closure_type,
  country_of_origin,
  care_instructions,
  size_system,
  fit_type,
  model_fit_suggestion,
  bundle_offers,
  customer_ratings,
  customer_reviews,
  verified_purchase,
  estimated_delivery_time,
  shipping_cost,
  cod_available,
  warranty,
  quantity_available,
  is_best_seller,
  is_new_arrival,
  is_trending,
  is_featured
`;

// 2. THE LOADER (Fetches EVERYTHING, just like shoes.json)
const fetchAllData = async () => {
  return await client.fetch(`*[_type == "product"] { ${productFields} }`);
};

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
        loader: fetchAllData, // Fetches full list
        hydrateFallbackElement: <LoadingScreen></LoadingScreen>,
        element: <Home></Home>,
        title : 'Home - New Lifestyle'
      },
      {
        path: '/new-arrival',
        loader: fetchAllData, // Fetches full list (Component filters it)
        hydrateFallbackElement: <LoadingScreen></LoadingScreen>,
        element: <NewArrival></NewArrival>,
        title : 'New Arrivals'
      },
      {
        path: '/best-selling',
        loader: fetchAllData, // Fetches full list (Component filters it)
        hydrateFallbackElement: <LoadingScreen></LoadingScreen>,
        element: <TopSelling></TopSelling>
      },
      {
        path: '/collections',
        loader: fetchAllData, // Fetches full list
        hydrateFallbackElement: <LoadingScreen></LoadingScreen>,
        element: <Collection></Collection>
      },
      {
        path: 'products/:id',
        loader: fetchAllData, // Fetches full list (Component finds ID)
        hydrateFallbackElement: <LoadingScreen></LoadingScreen>,
        element: <ProductDetail></ProductDetail>
      },
      {
        path: 'category/:categoryName',
        loader: fetchAllData, // Fetches full list (Component filters category)
        hydrateFallbackElement: <LoadingScreen></LoadingScreen>,
        element: <CategorizedProduct></CategorizedProduct>
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      },
      {
        path: '/wishlist',
        loader: fetchAllData, // Fetches full list
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
  },
  {
    path : '/payment',
    element : <PrivateRouter><Payment></Payment></PrivateRouter>
  }
]);

export default router;