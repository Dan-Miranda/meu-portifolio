import { createContext, ReactNode, useContext } from 'react'

interface IAppContext {
}

const initalContext: IAppContext = {
}

const AppContext = createContext<IAppContext>(initalContext)

export function useAppContext() {
  return useContext(AppContext)
}

interface IProps {
  children: ReactNode
}

export function AppProvider({ children }: IProps) {
  const value: IAppContext = {
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
