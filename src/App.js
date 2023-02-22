import React from 'react';
// import './App.css';
import { useRoutes } from 'react-router-dom';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeCards from '../src/Components/HomeCards/HomeCards.jsx';


function App() {

  // const router = createBrowserRouter([{
  //   path: "/",
  //   element: <HomePage />
  // }, {
  //   path: "/Stars",
  //   element: <Stars />
  // }, {
  //   path: "/Constellations",
  //   element: <Constellations />
  // }, {
  //   path: "/Tattoos",
  //   element: <Tattoos />
  // }
  // ])

  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      <HomeCards/>
    </div>
  );
}

export default App;