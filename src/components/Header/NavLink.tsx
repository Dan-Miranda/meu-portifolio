import { ReactNode } from 'react'
import { Link } from '@chakra-ui/react'

interface IHeaderProps {
  children: ReactNode,
  href: string
}

export function NavLink(props: IHeaderProps) {
  const { children, href } = { ...props }
  return (
    <Link
      paddingX={2}
      paddingY={1}
      rounded={'lg'}
      textAlign="center"
      _hover={{
        textDecoration: 'none',
        backgroundColor: 'purple.700'
      }}
      href={href}>
      {children}
    </Link>
  )
}
