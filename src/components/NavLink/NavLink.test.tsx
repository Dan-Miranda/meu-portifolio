import { fireEvent, render, screen } from '@testing-library/react'
import { NavLink } from '.'
import { ILink } from '../../sections/linksSections'
import { scrollToSection } from '../../utils/functions'

jest.mock('../../utils/functions')

describe('Quando NavLink é chamado', () => {
  const link: ILink = {
    htmlId: 'link-test',
    name: 'LinkTest'
  }

  render(<NavLink key={link.name} link={link}/>)
  const component = screen.getByText(link.name)

  test('Ele deve ser renderizado ', () => {
    expect(component).toBeInTheDocument()
  })

  fireEvent.click(component)
  test('Quando clicado, a função de scroll deve ser chamada', () => {
    expect(scrollToSection).toBeCalled()
  })
})

export {}
