import Pokedex from "../pages/Pokedex";
import SpecificPokemon from "../pages/SpecificPokemon";

export const pokedexRoutes = [
  {
    title: "Pokedex",
    pageName: "Pokedex",
    path: "/",
    element: <Pokedex />,
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
