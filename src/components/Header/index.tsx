import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  useDisclosure
} from '@chakra-ui/react'
import { HEADER_SIZE } from '../../utils/constants'
import { AvatarMenu } from '../AvatarMenu'
import { Logo } from '../Logo'
import { SectionLinks } from '../SectionLinks'

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
          aria-label="Abrir Menu"
          display={{ sm: 'none' }}
          onClick={handleToggle}
          backgroundColor={'gray.900'}
          _active={{ backgroundColor: 'gray.900' }}
          _focus={{ backgroundColor: 'gray.900' }}
          _hover={{ backgroundColor: 'gray.900' }}
        />
        <Logo />
        <SectionLinks display={{ base: 'none', sm: 'flex' }}/>
        <AvatarMenu />
      </Flex>

      <Collapse animateOpacity in={isOpen}>
        <SectionLinks handleToggle={handleToggle} isMobile/>
      </Collapse>

    </Box>
  )
}
