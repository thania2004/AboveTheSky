import * as React from 'react';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import Stars from './Pages/Stars/Stars';
import Constellations from './Pages/Constellations/Constellations';

function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <HomePage />
  }, {
    path: "/Stars",
    element: <Stars />
  }, {
    path: "/Constellations",
    element: <Constellations />
  }, 
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;