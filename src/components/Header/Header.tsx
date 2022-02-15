import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  IconButton,
  Stack,
  useDisclosure
} from '@chakra-ui/react'
import { linksSections } from '../../sections/linksSections'
import { HEADER_SIZE } from '../../utils/constants'
import { AvatarMenu } from './AvatarMenu'
import { NavLink } from './NavLink'
import { SectionLinks } from './SectionLinks'

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  function handleToggle() {
    return isOpen ? onClose() : onOpen()
  }

  return (
    <Box
      as="header"
      width="100%"
      backgroundColor="gray.900"
      position="fixed"
      zIndex="1"
    >
      <Flex
        height={HEADER_SIZE}
        alignItems={'center'}
        justifyContent={'space-between'}
        paddingX="1rem"
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
        <SectionLinks links={linksSections} />
        <AvatarMenu />
      </Flex>
      {isOpen &&
        (
        <Box
          paddingY="1rem"
          display={{ sm: 'none' }}
          backgroundColor="gray.900"
          borderBottomEndRadius="2xl"
          borderBottomStartRadius="2xl"
          paddingX="1rem"
        >
          <Stack as={'nav'} spacing={4}>
            {linksSections.map((link) => (
              <NavLink
                key={link.name}
                handleToggle={handleToggle}
                link={link}
              />
            ))}
          </Stack>
        </Box>
        )}

    </Box>
  )
}
