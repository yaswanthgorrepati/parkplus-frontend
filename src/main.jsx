import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ListingPage from "./pages/ListingPage.jsx";
import SpaceDetails from "./pages/SpaceDetails.jsx";
import Checkout from "./pages/Checkout.jsx";
import BookingHistory from "./pages/BookingHistory.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import Login from "./pages/Login.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/search", element: <ListingPage /> },
      { path: "/space/:id", element: <SpaceDetails /> },
      { path: "/checkout/:id", element: <Checkout /> },
      { path: "/user/bookings", element: <BookingHistory /> },
      { path: "/account", element: <AccountPage /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
