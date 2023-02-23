import * as React from 'react';
//import TransparentAppBar from "./Components/Header/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//import HomePage from './Pages/HomePage/HomePage';
import SimpleBottomNavigation from './Components/Footer/Footer';
//import Stars from './Pages/Stars/Stars';
//import Constellations from './Pages/Constellations/Constellations';
//import Tattoos from './Pages/Tattoos/Tattoos'

function App() {

  const router = createBrowserRouter([/*{
    path: "/",
    element: <TransparentAppBar />
  },{
    path: "/",
    element: <HomePage />
  },/* {
    path: "/Stars",
    element: <Stars />
  }, {
    path: "/Constellations",
    element: <Constellations />
  }, {
    path: "/Tattoos",
    element: <Tattoos />
  }*/
  {
    path: "/",
    element: <SimpleBottomNavigation />
  }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;