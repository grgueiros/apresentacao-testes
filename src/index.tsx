import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./state/rootStore";
import { Container } from "./features/example/containers/Container";
import { Layout } from "./ui/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </Provider>
);
