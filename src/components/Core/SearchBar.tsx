import { Search2Icon } from '@chakra-ui/icons'
import { Button, Image, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

interface SearchBarTypes {
  liftSearchText: (text: string) => void;
  onClick: () => void
}

const SearchBar = ({
  liftSearchText,
  onClick
}: SearchBarTypes) => {
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    liftSearchText(searchText)
  }, [searchText])

  return (
    <InputGroup size={'lg'} w={['100%', '100%', '49%']} mr={{ lg: 2 }}>
      <InputLeftElement>
        <Image
          width={'30px'}
          height={'30px'}
          src={'/pokeball.png'}
        />
      </InputLeftElement>
      <Input
        size={'lg'}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder='Find Pokemon'
        variant={'filled'}
        borderColor={'red.600'}
        focusBorderColor={'red.500'}
        color={'gray.300'}
      />
      <InputRightElement width='100px' alignItems={'center'} p={2}>
        <Button
          bg={'red.300'}
          height={'30px'}
          p={2}
          alignItems={'center'}
          onClick={onClick}
        >
          <Text color='red.600' fontWeight={'bold'} mr={2}>Find</Text>
          <Search2Icon
            color={'red.600'}
          />
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default SearchBar