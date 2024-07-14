import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Text,
  useDisclosure
} from '@chakra-ui/react'

interface IProps {
  sizeModal: ModalProps['size']
}

export function ModalAboutMe({ sizeModal }: IProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
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

      <Modal onClose={onClose} size={sizeModal} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent bgGradient="linear(to-b, gray.900, gray.700)" height={sizeModal === 'full' ? '100%' : 'auto'}>
          <ModalHeader>
            <Heading as="h3" size="lg">Sobre mim...</Heading>
          </ModalHeader>
          <ModalCloseButton backgroundColor="purple.700"/>
          <ModalBody overflow="auto">
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
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
