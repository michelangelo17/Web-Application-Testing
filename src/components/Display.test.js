import React from 'react'
import { render } from '@testing-library/react'
import Display from './Display'

const mockStateCounters = { balls: 4, strikes: 3, outs: 2, runs: 1, errors: 0 }

test('should render a display component', () => {
  render(<Display counters={mockStateCounters} />)
})

test('should display the ball count from props', () => {
  const { getByText } = render(<Display counters={mockStateCounters} />)
  expect(getByText(/balls/i)).toHaveTextContent(4)
})

test('should display the strike count from props', () => {
  const { getByText } = render(<Display counters={mockStateCounters} />)
  expect(getByText(/strikes/i)).toHaveTextContent(3)
})

test('should display the outs from props', () => {
  const { getByText } = render(<Display counters={mockStateCounters} />)
  expect(getByText(/outs/i)).toHaveTextContent(2)
})

test('should display the runs from props', () => {
  const { getByText } = render(<Display counters={mockStateCounters} />)
  expect(getByText(/runs/i)).toHaveTextContent(1)
})

test('should display the errors from props', () => {
  const { getByText } = render(<Display counters={mockStateCounters} />)
  expect(getByText(/errors/i)).toHaveTextContent(0)
})
