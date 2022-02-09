import { Avatar, Button, Flex, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react'

export function AvatarMenu() {
  return (
    <Flex alignItems={'center'}>
      <Menu>
        <MenuButton
          as={Button}
          rounded={'full'}
          variant={'link'}
          cursor={'pointer'}
          minW={0}
        >
          <Avatar size="md" src="https://github.com/Dan-Miranda.png" />
        </MenuButton>
        <MenuList backgroundColor="gray.900" border="none">
          <MenuGroup title='Contato'>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuDivider />
            <MenuItem>Link 3</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Flex>
  )
}
