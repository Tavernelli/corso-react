import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import  Contatti  from "./pages/Contatti";
import  About  from "./pages/About";
import  Cards  from "./pages/Cards";
import  Card  from "./pages/Card";
import  CardsChildren  from "./pages/CardsChildren";

import store from "./redux/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  { path: "/", element: <App></App> },
  { path: "/about", element: <About></About> },
  { path: "/contatti", element: <Contatti></Contatti> },
  { path: "/cards", element: <Cards></Cards> },
  { path: "/cards/:cardID", element: <Card></Card> },
  {
    path: "/cards-children",
    element: <CardsChildren></CardsChildren>,
    children: [
      {
        path: ":cardID",
        element: <Card></Card>,
      },
    ],
  },
]);

// As of React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*    <App /> */}
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
