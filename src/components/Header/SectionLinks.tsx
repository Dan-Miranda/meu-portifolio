import { Heading, HStack, Text } from '@chakra-ui/react'
import { NavLink } from './NavLink'

export interface ILink {
  name: string,
  htmlId: string
}

interface ISectionLinks {
  links: Array<ILink>
}

export function SectionLinks(props: ISectionLinks) {
  const { links } = { ...props }
  return (
    <HStack spacing={8} alignItems={'center'} backgroundColor="gray.900" >
      <Heading
        as="h1"
        size="lg"
        letterSpacing={'tighter'}
        marginRight="1rem"
      >
        <Text as="span" color="purple.600">_</Text>
        <Text as="span">dm</Text>
      </Heading>
      <HStack
        as={'nav'}
        spacing={4}
        display={{ base: 'none', sm: 'flex' }}
        backgroundColor="gray.900"
      >
        {links.map((link) => (
          <NavLink key={link.name} href={`#${link.htmlId}`}>
            {link.name}
          </NavLink>
        ))}
      </HStack>
    </HStack>
  )
}
