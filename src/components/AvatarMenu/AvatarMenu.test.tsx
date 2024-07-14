import { cleanup, fireEvent, queryByAttribute, render, screen } from '@testing-library/react'
import { AvatarMenu } from '.'

afterEach(cleanup)

describe('Quando AvatarMenu é chamado', () => {
  test('Um botão com o avatar do usuário é renderizado ', () => {
    render(<AvatarMenu />)
    const avatarButton = screen.getByRole('button')
    expect(avatarButton).toBeInTheDocument()
    const avatarImage = screen.getByRole('img')
    expect(avatarImage).toBeInTheDocument()
  })
})

describe('Ao clicar no botão avatar', () => {
  test('Um menu de links deve ser aberto', () => {
    const { container } = render(<AvatarMenu />)
    const avatarButton = screen.getByRole('button')

    fireEvent.click(avatarButton)

    const idMenuList = avatarButton.getAttribute('aria-controls')!.toString()
    const menuList = queryByAttribute('id', container, idMenuList)

    expect(avatarButton).toHaveAttribute('aria-expanded', 'true')

    expect(menuList).toBeInTheDocument()
  })
})

export {}
