import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./css/style.css";
import Root from "./pages/Root.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [{ path: "/", element: "" }],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
