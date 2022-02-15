import { ArrowDownIcon } from '@chakra-ui/icons'
import { Button, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useBreakpoint, useDisclosure } from '@chakra-ui/react'
import { HEADER_SIZE } from '../../utils/constants'
import { scrollToSection } from '../../utils/functions'
import { linksSections } from '../linksSections'

export function Presentation() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const breakpoint = useBreakpoint()
  const skillSection = linksSections[1]

  console.log('breakpoint', breakpoint)

  function defineSizeModal(): string {
    if (breakpoint === 'sm' || breakpoint === 'base') {
      return 'full'
    }
    return breakpoint ? breakpoint.toString() : ''
  }

  return (
    <Flex
      as="section"
      id="presentation"
      direction="column"
      width="100%"
      height="100%"
      paddingTop={HEADER_SIZE}
      paddingX="1rem"
      justify="center"
      align="center"
    >
      <Text>
        <Text as="span" fontSize="xl" fontWeight="bold">
          Olá, eu sou o
          <Heading as="span" fontWeight="bold" fontSize={'3xl'} color="purple.400"> Danillo</Heading>.
        </Text>
        <br />
        <Text as="span" fontSize="sm">
          Tenho 25 anos e sou desenvolvedor <Heading as="span" fontWeight="bold" fontSize={'xl'} color="purple.400"> Full Stack</Heading>.
        </Text>

      </Text>

      <Button
        onClick={onOpen}
        marginY="1rem"
        backgroundColor="purple.700"
        bottom="0"
        _hover={{
          color: 'purple.700',
          backgroundColor: 'white'
        }}
        _active={{
          color: 'purple.700',
          backgroundColor: 'grey.100'
        }}
      >
        <Text>Me conheça</Text>
      </Button>

      <Button
        onClick={() => scrollToSection(skillSection.htmlId)}
        variant="outline"
        leftIcon={<ArrowDownIcon />}
        marginY="1rem"
        position="absolute"
        bottom="0"
        color="white"
        _hover={{
          color: 'purple.700',
          backgroundColor: 'white'
        }}

      >
        <Text>O que eu sei fazer ?</Text>
      </Button>

      <Modal onClose={onClose} size={defineSizeModal()} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent bgGradient="linear(to-b, gray.900, gray.700)">
          <ModalHeader>
            <Heading as="h3" size="lg">Sobre mim...</Heading>
          </ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            <Text>ausdhausdhas asduahsudahsdua aushdausdhausd ausdhausdhasu asuhdausdhasdhu</Text>
            <Text>ausdhausdhas asduahsudahsdua aushdausdhausd ausdhausdhasu asuhdausdhasdhu</Text>
            <Text>ausdhausdhas asduahsudahsdua aushdausdhausd ausdhausdhasu asuhdausdhasdhu</Text>
            <Text>ausdhausdhas asduahsudahsdua aushdausdhausd ausdhausdhasu asuhdausdhasdhu</Text>
            <Text>ausdhausdhas asduahsudahsdua aushdausdhausd ausdhausdhasu asuhdausdhasdhu</Text>
            <Text>ausdhausdhas asduahsudahsdua aushdausdhausd ausdhausdhasu asuhdausdhasdhu</Text>
            <Text>ausdhausdhas asduahsudahsdua aushdausdhausd ausdhausdhasu asuhdausdhasdhu</Text>
            <Text>ausdhausdhas asduahsudahsdua aushdausdhausd ausdhausdhasu asuhdausdhasdhu</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}
              backgroundColor="purple.700"
              bottom="0"
              _hover={{
                color: 'purple.700',
                backgroundColor: 'white'
              }}
              _active={{
                color: 'purple.700',
                backgroundColor: 'grey.100'
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  )
}
