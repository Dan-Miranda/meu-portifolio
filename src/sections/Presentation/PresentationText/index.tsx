import { Heading, Text } from '@chakra-ui/react'

export function PresentationText() {
  return (
    <Text>
      <Text as="span" fontSize="xl" fontWeight="bold">
        Olá, eu sou o
        <Text as="span" fontWeight="bold" fontSize={'3xl'} color="purple.400"> Danillo</Text>.
      </Text>
      <br />
      <Text as="span" fontSize="sm">
        Tenho 25 anos e sou desenvolvedor
        <Heading as="span" fontWeight="bold" fontSize={'xl'} color="purple.400"> Full Stack</Heading>.
      </Text>
    </Text>
  )
}
