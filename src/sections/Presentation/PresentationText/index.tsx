import { Heading, Text } from '@chakra-ui/react'

export function PresentationText() {
  return (
    <>
      <Text as="p" fontSize="xl" fontWeight="bold">
        Olá, eu sou o{' '}
        <Text
          as="span"
          fontWeight="bold"
          fontSize="3xl"
          color="purple.500"
        >
          Danillo
        </Text>.
      </Text>
      <br />
      <Text as="p" fontSize="sm">
        Tenho 25 anos e sou um Cientista da Computação em formação atuando no mercado como desenvolvedor
        <Heading
          as="span"
          fontWeight="bold"
          fontSize="xl"
          color="purple.500"
        >
          {' '}Full Stack
        </Heading>.
      </Text>
    </>
  )
}
