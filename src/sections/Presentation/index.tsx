import { Flex, ModalProps, useBreakpoint } from '@chakra-ui/react'
import { HEADER_SIZE } from '../../utils/constants'
import { linksSections } from '../linksSections'
import { WhatDoIknowHowDoButton } from '../WhatDoIknowHowDoButton'
import { ModalAboutMe } from './ModalAboutMe'
import { PresentationText } from './PresentationText'

export function Presentation() {
  const skillSection = linksSections[1]

  const breakpoint = useBreakpoint()

  function defineSizeModal(): ModalProps['size'] {
    if (breakpoint === 'sm' || breakpoint === 'base') {
      return 'full'
    }
    return `${breakpoint}`
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
      <PresentationText />
      <ModalAboutMe sizeModal={defineSizeModal()} />
      <WhatDoIknowHowDoButton sectionId={skillSection.htmlId} />
    </Flex>
  )
}
