

import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/Core/SearchBar'
import { DataContext } from '../contexts/DataProvider'

const SearchByName = () => {
  const { allPokemons, setAllPokemons, allPokemonsAux }: any = useContext(DataContext)

  console.log('allPokemonsAux', allPokemonsAux)
  const [pokemonName, setPokemonName] = useState("")

  useEffect(() => {
    if (pokemonName === '') {
      setAllPokemons(allPokemonsAux)
    } else {
      setAllPokemons(
        allPokemons.filter((pokemon: any) => {
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

  // if (!pokemonData) return null
  // console.log('pokemonData', pokemonData)


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

            allPokemons.map((pokemon: { name: string, url: string }, index: number) => (
              <Link
                to={`/${pokemon.name}`}
                state={{ url: pokemon.url }}
                key={index}
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

export default SearchByName