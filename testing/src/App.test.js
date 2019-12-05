import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from './App'

test('renders app without crashing', () => {
  render(<App />)
})

test('contains the site title', () => {
  const { getByText } = render(<App />)
  getByText(/baseball counter/i)
})

test('should update display when ball button clicked', () => {
  const { getByTestId } = render(<App />)
  const ballButton = getByTestId('ballButton')
  const ballDisplay = getByTestId('ballDisplay')
  fireEvent.click(ballButton)
  expect(ballDisplay).toHaveTextContent('1')
  fireEvent.click(ballButton)
  expect(ballDisplay).toHaveTextContent('2')
})

test('should update display when strike button clicked', () => {
  const { getByTestId } = render(<App />)
  const strikeButton = getByTestId('strikeButton')
  const strikeDisplay = getByTestId('strikeDisplay')
  fireEvent.click(strikeButton)
  expect(strikeDisplay).toHaveTextContent('1')
  fireEvent.click(strikeButton)
  expect(strikeDisplay).toHaveTextContent('2')
})

test('should render all displays correctly after a click', () => {
  const { getByTestId } = render(<App />)
  const ballButton = getByTestId('ballButton')
  const ballDisplay = getByTestId('ballDisplay')
  const strikeButton = getByTestId('strikeButton')
  const strikeDisplay = getByTestId('strikeDisplay')
  fireEvent.click(strikeButton)
  expect(ballDisplay).toHaveTextContent('0')
  fireEvent.click(ballButton)
  expect(strikeDisplay).toHaveTextContent('1')
});