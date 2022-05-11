import { Box } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { DataContext } from '../contexts/DataProvider'

const Home = () => {
  const { allPokemons }: any = useContext(DataContext)

  console.log("allPokemons", allPokemons)
  return (
    <Box width={'100%'} bg={'black'}>
      teste
    </Box>
  )
}

export default Home