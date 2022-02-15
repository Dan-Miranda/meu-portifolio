import { Dispatch, SetStateAction, useState } from 'react'
import { Link } from '@chakra-ui/react'
import { scrollToSection } from '../../utils/functions'
import { ILink } from '../../sections/linksSections'

interface INavLinkProps {
  link: ILink,
  focus?: [focus: string, setFocus: Dispatch<SetStateAction<string>>],
  handleToggle?: () => void
}

export const NavLink = (props: INavLinkProps) => {
  const { handleToggle, link, focus } = { ...props }
  const [focusLink, setFocusLink] = focus || useState()

  function scrollToSectionAndSetFocusLink() {
    scrollToSection(link.htmlId)
    setFocusLink(link.name)

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
      onClick={() => scrollToSectionAndSetFocusLink()}
    >
      {link.name}
    </Link>
  )
}
