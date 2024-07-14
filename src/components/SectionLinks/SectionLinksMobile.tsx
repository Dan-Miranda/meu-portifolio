import { VStack } from '@chakra-ui/react'
import { ListLinks } from './ListLinks'

export function SectionLinksMobile() {
  return (
    <VStack
      as={'nav'}
      paddingY="1rem"
      display={{ sm: 'none', base: 'flex' }}
      backgroundColor="gray.900"
      borderBottomEndRadius="2xl"
      borderBottomStartRadius="2xl"
      paddingX="1rem" spacing={4}
    >
      <ListLinks />
    </VStack>
  )
}
