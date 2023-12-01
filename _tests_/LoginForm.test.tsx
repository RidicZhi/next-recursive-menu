import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import LoginForm from '@/components/LoginForm'

jest.mock('next/navigation', () => ({
  __esModule: true,
  useRouter: jest.fn()
}))

describe('LoginForm Component', () => {
  test('LoginForm renders without error', () => {
    render(<LoginForm />)

    expect(screen.getByText('User Name')).toBeInTheDocument()
    expect(screen.getByText('Password')).toBeInTheDocument()
  })

  test('Submit the form', async () => {
    // Mock POST function
    global.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ message: 'Wrong user name or password' })
      })
    )

    render(<LoginForm />)
    
    // Input and Submit
    fireEvent.change(screen.getByLabelText('User Name'), {
      target: { value: 'WrongUser' }
    })
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'WrongPassword' }
    })

    fireEvent.click(screen.getByText('Submit'))

    // Wait for the POST request to complete
    await waitFor(() => {
      setTimeout(() => {
        // Ensure that the error message is displayed
        expect(
          screen.getByText('Wrong user name or password')
        ).toBeInTheDocument()
      }, 200)
    })
  })
})
