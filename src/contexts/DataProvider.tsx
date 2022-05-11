import axios from "axios";
import React, { useEffect, useState } from "react";

export const DataContext = React.createContext({});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [allPokemons, setAllPokemons] = useState([])
  const [allPokemonsAux, setAllPokemonsAux] = useState([])
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const getAllPokemons = async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${1126}&offset=${0}`)
      setAllPokemons(res.data.results)
      setAllPokemonsAux(res.data.results)
    }

    getAllPokemons()
  }, [])

  return (
    <DataContext.Provider
      value={{
        allPokemons,
        setAllPokemons,
        allPokemonsAux,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};