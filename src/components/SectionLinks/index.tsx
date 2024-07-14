import { StackProps } from '@chakra-ui/react'
import { SectionLinksProvider } from '../../context/SectionLinkContext'
import { SectionLinksDesktop } from './SectionLinksDesktop'
import { SectionLinksMobile } from './SectionLinksMobile'

interface IProps extends StackProps {
  isMobile?: boolean,
  handleToggle?: () => void
}

export function SectionLinks({ isMobile, handleToggle }: IProps) {
  const value = {
    handleToggle
  }
  return (
    <SectionLinksProvider value={value}>
      { isMobile ? (<SectionLinksMobile />) : (<SectionLinksDesktop />)}
    </SectionLinksProvider>
  )
}
