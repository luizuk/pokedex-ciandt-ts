import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../contexts/DataProvider'

const Home = () => {
  const { allPokemons }: any = useContext(DataContext)

  console.log("allPokemons", allPokemons)
  return (
    <Box
      width={'100%'}
      bg={'black'}
      p={2}
      justifyContent={'center'}
    >
      <Link
        to={'/search'}
      >
        <Button
          colorScheme={'facebook'}
          mr={2}
        >
          <Text
            textAlign={'center'}
          >
            Search By Name
          </Text>
        </Button>
      </Link>

      <Link
        to={'/filters'}
      >
        <Button
          colorScheme={'facebook'}
          mr={2}
        >
          <Text
            textAlign={'center'}
          >
            Filters
          </Text>
        </Button>
      </Link>


      <Link
        to={'/favorites'}
      >
        <Button
          colorScheme={'facebook'}
        >
          <Text
            textAlign={'center'}
          >
            Favorites
          </Text>
        </Button>
      </Link>
    </Box>
  )
}

export default Home