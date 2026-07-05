import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

test('renders Gaurav’s backend engineering portfolio', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )

  expect(
    screen.getByRole('heading', {
      name: /I build reliable backend systems/i,
    })
  ).toBeTruthy()
  expect(
    screen.getByRole('link', { name: /View my work/i })
  ).toBeTruthy()
})
