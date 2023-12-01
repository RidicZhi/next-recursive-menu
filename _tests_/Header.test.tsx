import { render, fireEvent, screen } from '@testing-library/react'
import HeaderNavItem from '@/components/HeaderNavItem'
import Dropdown from '@/components/Dropdown'

const mockMenu = [{ id: '1', title: 'Home', url: '/', submenu: [] }]

const mockItem1 = {
  id: '1',
  title: 'Test',
  url: '/test',
  submenu: []
}

const mockItem2 = {
  id: '1',
  title: 'Test',
  url: '/test',
  submenu: [
    {
      id: '1.1',
      title: 'Subitem',
      url: '/subitem',
      submenu: []
    }
  ]
}

const mockSubMenu = [
  {
    id: '2.1',
    title: 'Subitem',
    url: '/subitem',
    submenu: []
  }
]

describe('Header Component', () => {
  test('Mock HeaderNavbar', () => {
    jest.mock('../components/HeaderNavbar', () => ({
      ...jest.requireActual('../components/HeaderNavbar'),
      getMenuJSON: jest.fn().mockResolvedValue(mockMenu)
    }))
  })

  test('HeaderNavItem renders without error', () => {
    render(<HeaderNavItem item={mockItem1} />)

    const link = screen.getByRole('link', { name: 'Test' })
    expect(link).toHaveAttribute('href', '/test')
  })

  test('HeaderNavItem toggles dropdown on button click', () => {
    render(<HeaderNavItem item={mockItem2} />)
    const button = screen.getByRole('button')
    fireEvent.click(button)

    const link = screen.getByRole('link', { name: 'Subitem' })
    expect(link).toHaveAttribute('href', '/subitem')
  })

  test('Dropdown renders with correct class name', () => {
    const { container } = render(
      <Dropdown submenus={mockSubMenu} showDropdown={false} />
    )

    const dropdownDiv = container.getElementsByClassName('dropdown hide')[0]
    expect(dropdownDiv).toBeInTheDocument()
  })
})
