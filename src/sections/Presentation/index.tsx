import { Flex, Text } from '@chakra-ui/react'
import { HEADER_SIZE } from '../../utils/constants'

export function Presentation() {
  return (
    <Flex
      as="section"
      id="presentation"
      width="100%"
      height="100%"
      backgroundColor={'gray.300'}
      paddingTop={HEADER_SIZE}
      align="center"
      justify="center"
    >
      <Text>Presentation</Text>
    </Flex>
  )
}
