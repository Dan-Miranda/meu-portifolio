import { ReactNode } from 'react'
import { Link } from '@chakra-ui/react'

interface IHeaderProps {
  children: ReactNode,
  href: string,
  handleToggle?: () => void
}

export const NavLink = (props: IHeaderProps) => {
  const { children, href, handleToggle } = { ...props }

  function scrollToSection() {
    const section = document.getElementById(href)

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }

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
      onClick={scrollToSection}
    >
      {children}
    </Link>
  )
}
