import { render, screen } from '@testing-library/react'
import { Header } from '.'

jest.mock('next-auth/client', () => {
  return {
    useSession() {
      return [null, false]
    },
  }
})

describe('ActiveLink component', () => {
  it('should renders correctly', () => {
    render(<Header />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Posts')).toBeInTheDocument()
  })
})
