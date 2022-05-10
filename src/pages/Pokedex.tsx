

import { Box, Button, Flex, SimpleGrid, Text, useEditable } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/Core/SearchBar'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Pokedex = () => {
  const [firstTwenty, setFirstTwenty] = useState([])
  const [pokemonName, setPokemonName] = useState("")
  const [pokemonData, setPokemonData] = useState([])
  const [auxData, setAuxData] = useState([])
  const [limit, setLimit] = useState(1126)
  const [offset, setOffset] = useState(0)



  useEffect(() => {
    const getAllPokemons = async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
      setPokemonData(res.data.results)
      setAuxData(res.data.results)
    }

    getAllPokemons()
  }, [])

  console.log('pokemonName', pokemonName)


  useEffect(() => {
    if (pokemonName === '') {
      setPokemonData(auxData)
    } else {
      setPokemonData(
        pokemonData.filter((pokemon: any) => {
          if (pokemon.name.toLowerCase().indexOf(pokemonName.toLowerCase()) > -1) {
            return true
          }
          else {
            return false
          }
        })
      )
    }
  }, [pokemonName])

  return (
    <Flex
      bg='black'
      padding={2}
      flexDirection={['column', 'column', 'row']}
    >
      <Box
        w={'100%'}
        flexDirection={'column'}
      >
        <Text
          fontSize={'2xl'}
          fontWeight={'bold'}
          marginY={2}
        >
          Quick search by name
        </Text>
        <SearchBar
          liftSearchText={(text: string) => setPokemonName(text)}
        // onClick={() => getPokemonByName()}
        />

        <SimpleGrid columns={[1, 2, 3]} spacing='20px' mt={2} >
          {
            pokemonData.map((pokemon: { name: string, url: string }, index: number) => (
              <Link
                to={`/${pokemon.name}`}
                state={{ url: pokemon.url }}
              >
                <Flex
                  bg='red.700'
                  height={'60px'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Text textAlign={'center'} fontSize={'1.5rem'}>
                    {pokemon.name}
                  </Text>
                </Flex>
              </Link>
            ))
          }
        </SimpleGrid>

      </Box>

      {/* <Box
        w={['100%', '100%', '49%']}
        height={"50px"}
        bg={'red.800'}
        rounded={'md'}
        alignItems={'center'}
        p={1}
      >
        Filters menu
      </Box> */}

    </Flex >
  )
}

export default Pokedex