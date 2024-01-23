import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeOutlet from "../../Roots/HomeOutlet";
import ErrorPage from "../Error";
import HomePage from "../../Pages/HomePage";
import Cart from "../../components/Cart/Carts";
import DetailedPage from "../../Pages/DetailedPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeOutlet />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "seller", element: <h1>Seller</h1> },
      { path: ":productId", element: <DetailedPage /> },
      // thise dropdown menu bar---------------->
      { path: "profile", element: <h1>Profile</h1> },
      { path: "super_coing", element: <h1>SuperCoin</h1> },
      { path: "plus_zone", element: <h1>Plus Zone</h1> },
      { path: "orders", element: <h1>orders</h1> },
      { path: "whish_list", element: <h1>wish list</h1> },
      { path: "coupons", element: <h1>Coupons</h1> },
      { path: "gift_cards", element: <h1>Gift Cards</h1> },
      { path: "notification", element: <h1>Notification</h1> },
      { path: "logout", element: <h1>Logout</h1> },
      { path: "cart", element: <Cart /> },
      { path: "notification_pre", element: <h1>Notification Preference</h1> },
      { path: "customer_care", element: <h1>Customer Care</h1> },
      { path: "advertise", element: <h1>Advertise</h1> },
      { path: "downolad", element: <h1>Downolad</h1> },
      { path: "top_offers", element: <h1>Top Offers</h1> },
      { path: "mobile_tablets", element: <h1>Mobiles & Tablets</h1> },
      { path: "electronics", element: <h1>Electronics</h1> },
      { path: "flight-code", element: <h1>Flight Code</h1> },
      { path: "tv_appliances", element: <h1>TVs & Appliances</h1> },
      { path: "fashion", element: <h1>Fashion</h1> },
      { path: "beauty", element: <h1>Beauty</h1> },
      { path: "home_furuniture", element: <h1>Home & Kitchen</h1> },
      { path: "furniture", element: <h1>Furniture</h1> },
      { path: "flights", element: <h1>Flights</h1> },
      { path: "grocery", element: <h1>Grocery</h1> },
      { path: "flights_offers", element: <h1>Flight Offers</h1> },
      { path: "flights_coupons", element: <h1>Flights Coupus</h1> },
      { path: "flights_deals", element: <h1>Flights Deals</h1> },
      { path: "shirts_accessories", element: <h1>Shirts & Accessories</h1> },
      { path: "best_electronics", element: <h1>Best Electronics</h1> },
      { path: "women_clothes", element: <h1>Women Clothes</h1> },
      { path: "electronic_offers", element: <h1>Best Electronic Offers</h1> },
      { path: "ten_percent_discount", element: <h1>Ten Percent Discount</h1> },
      { path: "three_banner_1", element: <h1>Banner 1</h1> },
      { path: "three_banner_2", element: <h1>Banner 2</h1> },
      { path: "three_banner_3", element: <h1>Banner 3</h1> },
    ],
  },
]);

const Routes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Routes;
