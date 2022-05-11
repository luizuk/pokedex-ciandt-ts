import { Box, Button, Flex, Select, SimpleGrid, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Filters = () => {
  const [pokeTypeUrl, setPokeTypeUrl] = useState("")
  const [foundPokemons, setFoundPokemons] = useState([])
  const [pokemonTypes, setPokemonTypes] = useState([])




  useEffect(() => {
    const getPokemonsTypes = async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/type`)
      setPokemonTypes(res.data.results)
    }

    getPokemonsTypes()
  }, [])

  const getPokemonsByType = async () => {
    const res: any = await axios.get(pokeTypeUrl)
    setFoundPokemons(res.data.pokemon)
  }

  if (!pokemonTypes) return null
  return (
    <Box
      w={'100%'}
      bg={'black'}
      h={'full'}
      p={5}
    >
      <Text
        fontWeight={'bold'}
        fontSize={22}
        mb={2}
      >
        Find by type
      </Text>

      <Flex>
        <Select
          value={pokeTypeUrl}
          placeholder='Select type of Pokemon'
          onChange={e => setPokeTypeUrl(e.target.value)}
          w={'200px'}
        >
          {pokemonTypes?.map((type: any) => (
            <option value={type.url} >{type.name}</option>
          ))}
        </Select>

        <Button
          colorScheme={'red'}
          ml={5}
          onClick={() => getPokemonsByType()}
        >
          Filter
        </Button>
      </Flex>


      {
        (foundPokemons.length > 0) &&
        <Box
          w={'100%'}
          bg={'gray.900'}
          mt={5}
          p={4}
        >
          <Text
            fontWeight={'bold'}
            fontSize={22}
            mb={2}
          >
            Found pokemons:
          </Text>

          <SimpleGrid columns={[1, 2, 3]} spacing='20px' mt={2} >
            {
              foundPokemons.map((pokemon: any, index: number) => (
                <Link
                  to={`/${pokemon.pokemon.name}`}
                  state={{ url: pokemon.pokemon.url }}
                  key={index}
                >
                  <Flex
                    bg='red.700'
                    height={'60px'}
                    justifyContent={'center'}
                    alignItems={'center'}
                  >
                    <Text textAlign={'center'} fontSize={'1.5rem'}>
                      {pokemon.pokemon.name}
                    </Text>
                  </Flex>
                </Link>
              ))
            }
          </SimpleGrid>

        </Box>
      }
    </Box>
  )
}

export default Filters