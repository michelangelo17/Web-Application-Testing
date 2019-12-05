import React from 'react'
import { render } from '@testing-library/react'
import Display from './Display'

const counters = { balls: 0, strikes: 0 }

test('should render a display component', () => {
  render(<Display counters={counters} />)
})

test('should display the ball count from props', () => {
  const { getByText } = render(<Display counters={counters} />)
  expect(getByText(/balls: /i)).toHaveTextContent('0')
})

test('should display the strike count from props', () => {
  const { getByText } = render(<Display counters={counters} />)
  expect(getByText(/strikes: 0/i)).toHaveTextContent('0')
})
