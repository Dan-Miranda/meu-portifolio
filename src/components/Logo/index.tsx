import { Heading, Text } from '@chakra-ui/react'

export function Logo() {
  return (
   <Heading
      as="h1"
      size="lg"
      letterSpacing={'tighter'}
      marginRight="1rem"
      cursor="pointer"
    >
      <Text as="span" color="purple.600">_</Text>
      <Text as="span">dm</Text>
    </ Heading>
  )
}
