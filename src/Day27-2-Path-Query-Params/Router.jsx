import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Productmain from "./ProductMain";
import Listproduct from "./ListProduct";

let Routes = createBrowserRouter([
  { path: "/", element: <Productmain /> },
  { path: "/product/:id", element: <Listproduct /> },
]);
export default function Router() {
  return (
    <div>
      <RouterProvider router={Routes} />
    </div>
  );
}