import { FaFacebook, FaWhatsapp, FaLinkedinIn, FaInstagram, FaGoogle } from 'react-icons/fa'
import { Avatar, Button, Flex, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react'

export function AvatarMenu() {
  return (
    <Flex alignItems={'center'}>
      <Menu autoSelect={false}>
        <MenuButton
          as={Button}
          rounded={'full'}
          variant={'link'}
          cursor={'pointer'}
        >
          <Avatar size="md" src="https://github.com/Dan-Miranda.png" />
        </MenuButton>
        <MenuList backgroundColor="gray.900" border="none">
          <MenuGroup title="Contato">
            <MenuItem
              as="a"
              target="_blank"
              href="mailto:danillo.sm89@gmail.com"
              icon={ <FaGoogle /> }
            >
              E-mail
            </MenuItem>
            <MenuItem
              as="a"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5514998832307&text=Olá,%20Danillo"
              icon={ <FaWhatsapp /> }
            >
              Whatsapp
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Redes Sociais">
            <MenuItem
              as="a"
              target="_blank"
              href="https://www.linkedin.com/in/danillo-miranda/"
              icon={ <FaLinkedinIn /> }
            >
              Linkedin
            </MenuItem>
            <MenuItem
              as="a"
              target="_blank"
              href="https://www.facebook.com/danillo.santosmiranda"
              icon={ <FaFacebook />}
            >
              Facebook
            </MenuItem>
            <MenuItem
              as="a"
              target="_blank"
              href="https://www.instagram.com/dan.o.boy/"
              icon={ <FaInstagram /> }>
              Instagram
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Flex>
  )
}
