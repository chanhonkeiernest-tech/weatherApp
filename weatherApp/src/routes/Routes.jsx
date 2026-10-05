import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Now from "../views/Now";
import Future from "../views/Future";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Now /> },
      { path: "future", element: <Future /> },
    ],
  },
]);