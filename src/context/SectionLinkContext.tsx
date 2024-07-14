import { createContext, ReactNode, useContext } from 'react'

interface ISectionLinksContext {
  handleToggle?: () => void
}

const initalContext: ISectionLinksContext = {
  handleToggle: () => {}
}

const SectionLinksContext = createContext<ISectionLinksContext>(initalContext)

export function useSectionLinksContext() {
  return useContext(SectionLinksContext)
}

interface IProps {
  children: ReactNode,
  value: ISectionLinksContext
}

export function SectionLinksProvider({ children, value }: IProps) {
  return (
    <SectionLinksContext.Provider value={value}>
      {children}
    </SectionLinksContext.Provider>
  )
}
