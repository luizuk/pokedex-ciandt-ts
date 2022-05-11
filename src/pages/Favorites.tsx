import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../contexts/DataProvider'

const Favorites = () => {
  const { favorites, setFavorites }: any = useContext(DataContext)

  return (
    <Box p={4}>
      <Text
        fontSize={22}
        fontWeight={'bold'}
      >
        Favorites Pokemons
      </Text>

      <SimpleGrid columns={[1, 2, 3]} spacing='20px' mt={2} >
        {
          favorites.map((pokemon: any, index: number) => (
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
  )
}

export default Favorites