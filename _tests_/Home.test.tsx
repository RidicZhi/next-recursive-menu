import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home Page', () => {
  render(<Home />)
  it('should have text', () => {
    const myElem = screen.getByText('hello')
    expect(myElem).toBeInTheDocument()
  })
})
