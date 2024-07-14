import { Link } from '@chakra-ui/react'
import { scrollToSection } from '../../utils/functions'
import { ILink } from '../../sections/linksSections'

interface INavLinkProps {
  link: ILink,
  handleToggle?: () => void
}

export const NavLink = (props: INavLinkProps) => {
  const { handleToggle, link } = { ...props }

  function scrollToSectionAndSetFocusLink() {
    scrollToSection(link.htmlId)

    return handleToggle ? handleToggle() : null
  }

  return (
    <Link
      as="a"
      padding={4}
      rounded={'lg'}
      textAlign="center"
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
