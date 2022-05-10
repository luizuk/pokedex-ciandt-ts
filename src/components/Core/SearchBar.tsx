import { Image, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

interface SearchBarTypes {
  liftSearchText: (text: string) => void;
}

const SearchBar = ({
  liftSearchText
}: SearchBarTypes) => {
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    liftSearchText(searchText)
  }, [searchText])

  return (
    <InputGroup size={'lg'} w={'100%'} mr={{ lg: 2 }}>
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
    </InputGroup>
  )
}

export default SearchBar