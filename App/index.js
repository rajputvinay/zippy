import { Provider } from "react-redux";
import App from "./App";
import ReactDOM from "react-dom/client";
import Store from "./src/store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./src/components/Body";
import RestaurantMenu from "./src/components/RestaurantPage";
import Login from "./src/components/Login";
import SignUp from "./src/components/SignUp";
import CartPage from "./src/components/Cart";
import { Support } from "./src/components/Contact";
const routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "contact",
        element: <Support />,
      },
      {
        path: "register",
        element: <SignUp />,
      },
      {
        path: "resId/:id",
        element: <RestaurantMenu />,
      },

      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <RouterProvider router={routing} />
  </Provider>
);
