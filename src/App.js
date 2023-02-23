import SearchAppBar from "./Components/Header/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <SearchAppBar />
  },/*{
    path: "/",
    element: <HomePage />
  }, {
    path: "/Stars",
    element: <Stars />
  }, {
    path: "/Constellations",
    element: <Constellations />
  }, {
    path: "/Tattoos",
    element: <Tattoos />
  }*/
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;