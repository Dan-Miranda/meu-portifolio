import { Heading, HStack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { ILink } from '../../sections/linksSections'
import { NavLink } from './NavLink'

interface ISectionLinks {
  links: Array<ILink>
}

export function SectionLinks(props: ISectionLinks) {
  const { links } = { ...props }
  const [focus, setFocus] = useState(links[0].name)

  function renderLinks() {
    return links.map((link) => {
      return (
        <NavLink key={link.name} link={link} focus={[focus, setFocus]} />
      )
    })
  }

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
        {renderLinks()}
      </HStack>
    </HStack>
  )
}
