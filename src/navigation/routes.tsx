
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Favorites from "../pages/Favorites";
import Pokedex from "../pages/Pokedex";
import SpecificPokemon from "../pages/SpecificPokemon";

const pokedexRoutes = [
  {
    title: "Pokedex",
    pageName: "Pokedex",
    path: "/",
    element: <Pokedex />,
    private: false,
  },
  {
    title: "Favorites",
    pageName: "Favorites",
    path: "/favorites",
    element: <Favorites />,
    private: false,
  },
  {
    title: "SpecificPokemon",
    pageName: "SpecificPokemon",
    path: "/:specific",
    element: <SpecificPokemon />,
    private: false,
  },
];



const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        {pokedexRoutes.map((route, key) => {
          return <Route key={key} path={route.path} element={route.element} />;
        })}
      </Routes>
    </Router>
  )
}

export default AllRoutes
