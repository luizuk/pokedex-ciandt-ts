import { Avatar, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// interface urlProp {
//   url: string
// }

const SpecificPokemon = () => {
  const location = useLocation();
  const { url }: any = location.state;
  console.log('url', url)

  const [specificPokemonData, setSpecificPokemonData] = useState<any>(null)

  useEffect(() => {
    const getSpecificPokemon = async () => {
      const res: any = await axios.get(`${url}`)
      setSpecificPokemonData(res.data)
    }

    getSpecificPokemon()
  }, [])

  if (!specificPokemonData) return null

  console.log('specificPokemonData', specificPokemonData)

  return (
    <Flex
      w={'100%'}
      bg={'black'}
      p={2}
    >
      <Flex
        w={'300px'}
        h={'300px'}
        bg={'red.600'}
        rounded={'lg'}
        p={4}
        flexDirection={'column'}
        alignItems={'center'}
      >
        <Text
          fontSize={32}
          fontWeight={'bold'}
        >
          {specificPokemonData.name.toUpperCase()}
        </Text>

        <Avatar
          bg={'yellow.100'}
          w={200}
          h={200}
          src={specificPokemonData.sprites.front_default}
        />

      </Flex>

    </Flex>
  )
}

export default SpecificPokemon