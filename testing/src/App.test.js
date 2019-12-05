import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders app without crashing', () => {
  render(<App />)
})

test('contains the site title', () => {
  const { getByText } = render(<App />)
  getByText(/baseball counter/i)
})

test('should display number of balls', () => {
  const { getByText } = render(<App />)
  getByText(/balls/i)
})

test('should contain a button for foul', () => {
  const { getByText } = render(<App />)
  getByText(/foul/i)
})