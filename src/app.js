import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Shimmer from "./components/Shimmer.jsx";
import Contact from "./components/Contact.jsx";
import Cart from "./components/Cart.jsx";
import Resturant from "./components/Resturant.jsx";
import Error from "./components/Error.jsx";
import Profile from "./components/ProfileClass.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";
/*    
    Header
        -Logo
        -Nav Items
        -Cart 
    Body
        -Search Bar
        -Restraunt list
            -Restraunt Card
                -Image
                -Rating
                -Name
                -Cuisine
    Footer
        -Links
        -Copyright
*/

const Instamart = lazy(() => import("./components/Instamart.jsx"));
const About = lazy(() => import("./components/About.jsx"));

const Applayout = () => (
  <Provider store={store}>
    <Header />
    <Outlet />
    <Footer />
  </Provider>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/resturants/:id",
        element: <Resturant />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
