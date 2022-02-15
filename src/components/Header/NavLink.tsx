import { Dispatch, SetStateAction, useState } from 'react'
import { Link } from '@chakra-ui/react'
import { ILink } from './SectionLinks'

interface IHeaderProps {
  link: ILink,
  focus?: [focus: string, setFocus: Dispatch<SetStateAction<string>>],
  handleToggle?: () => void
}

export const NavLink = (props: IHeaderProps) => {
  const { handleToggle, link, focus } = { ...props }
  const [focusLink, setFocusLink] = focus || useState()

  function scrollToSection() {
    const section = document.getElementById(link.htmlId)

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setFocusLink(link.name)
    }

    return handleToggle ? handleToggle() : null
  }

  return (
    <Link
      as="a"
      padding={4}
      rounded={'lg'}
      textAlign="center"
      backgroundColor={link.name === focusLink ? 'purple.700' : 'initial'}
      _hover={{
        textDecoration: 'none',
        backgroundColor: 'purple.700'
      }}
      onClick={scrollToSection}
    >
      {link.name}
    </Link>
  )
}
