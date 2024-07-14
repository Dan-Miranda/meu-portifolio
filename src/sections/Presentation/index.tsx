import { Flex, ModalProps, useBreakpoint } from '@chakra-ui/react'
import { HEADER_SIZE } from '../../utils/constants'
import { ModalAboutMe } from './ModalAboutMe'
import { PresentationText } from './PresentationText'

export function Presentation() {
  const breakpoint = useBreakpoint()

  function defineSizeModal(): ModalProps['size'] {
    if (breakpoint === 'sm' || breakpoint === 'base') {
      return 'full'
    }
    return 'lg'
  }

  return (
    <Flex
      as="section"
      id="presentation"
      direction="column"
      width="100vw"
      height="100vh"
      paddingTop={HEADER_SIZE}
      paddingX="1rem"
      justify="center"
      align="center"
      bgGradient="linear(to-b, gray.900, gray.700)"
    >
      <PresentationText />
      <ModalAboutMe sizeModal={defineSizeModal()} />
    </Flex>
  )
}
