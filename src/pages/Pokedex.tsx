import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/Core/SearchBar'
import axios from 'axios'

const Pokedex = () => {
  const [firstTwenty, setFirstTwenty] = useState([])
  const [pokemonName, setPokemonName] = useState("")
  const [pokemonData, setPokemonData] = useState(null)


  async function getPokemonByName() {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    setPokemonData(res.data)
  }

  return (
    <Flex
      height={'100vh'}
      bg='black'
      padding={2}
      flexDirection={['column', 'column', 'row']}
    >
      <Box
        w={'100%'}
        flexDirection={'column'}
      >
        <Text
          fontSize={'lg'}
          fontWeight={'bold'}
        >Find a pokemon by name:</Text>
        <SearchBar
          liftSearchText={(text: string) => setPokemonName(text)}
          onClick={() => getPokemonByName()}
        />
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

    </Flex>
  )
}

export default Pokedex