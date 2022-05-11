
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Favorites from "../pages/Favorites";
import Filters from '../pages/Filters';
import Home from '../pages/Home';
import SearchByName from '../pages/SearchByName';
import SpecificPokemon from "../pages/SpecificPokemon";


const pokedexRoutes = [
  {
    title: "Home",
    pageName: "Home",
    path: "/",
    element: <Home />,
    private: false,
  },
  {
    title: "Quick Search (Name)",
    pageName: "SearchByName",
    path: "/search",
    element: <SearchByName />,
    private: false,
  },
  {
    title: "Filters",
    pageName: "Filters",
    path: "/filters",
    element: <Filters />,
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
