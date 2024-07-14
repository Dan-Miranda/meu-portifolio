import { HStack } from '@chakra-ui/react'
import { ListLinks } from './ListLinks'

export function SectionLinksDesktop() {
  return (
      <HStack
        as={'nav'}
        spacing={4}
        display={{ base: 'none', sm: 'flex' }}
        backgroundColor="gray.900"
      >
        <ListLinks />
      </HStack>
  )
}
