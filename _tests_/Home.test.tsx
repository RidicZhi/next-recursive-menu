import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home Page', () => {
  it('Home Page should render welcome image', () => {
    render(<Home />)
    const image = screen.getByAltText('hi')
    expect(image).toBeInTheDocument()
  })
})
