import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  IconButton,
  Stack,
  useDisclosure
} from '@chakra-ui/react'
import { HEADER_SIZE } from '../../utils/constants'
import { AvatarMenu } from './AvatarMenu'
import { NavLink } from './NavLink'
import { ILink, SectionLinks } from './SectionLinks'

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  function handleToggle() {
    return isOpen ? onClose() : onOpen()
  }

  const links: Array<ILink> = [
    {
      name: 'Apresentação',
      htmlId: 'presentation'
    },
    {
      name: 'Habilidades',
      htmlId: 'skills'
    },
    {
      name: 'Contato',
      htmlId: 'contatc'
    }
  ]

  return (
    <Box
      as="header"
      position="fixed"
      width="100%"
      backgroundColor="gray.900"
    >
      <Flex
        height={HEADER_SIZE}
        alignItems={'center'}
        justifyContent={'space-between'}
        paddingX="2rem"
      >
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ sm: 'none' }}
          onClick={handleToggle}
          backgroundColor={'gray.900'}
          _active={{ backgroundColor: 'gray.900' }}
          _focus={{ backgroundColor: 'gray.900' }}
          _hover={{ backgroundColor: 'gray.900' }}
        />
        <SectionLinks links={links} />
        <AvatarMenu />
      </Flex>
      {isOpen
        ? (
        <Box
          paddingY="1rem"
          display={{ sm: 'none' }}
          backgroundColor="gray.900"
          borderBottomEndRadius={isOpen ? '2xl' : 0}
          borderBottomStartRadius={isOpen ? '2xl' : 0}
          paddingX="1rem"
        >
          <Stack as={'nav'} spacing={4}>
            {links.map((link) => (
              <NavLink key={link.name} href={`#${link.htmlId}`}>{link.name}</NavLink>
            ))}
          </Stack>
        </Box>
          )
        : null}

    </Box>
  )
}
