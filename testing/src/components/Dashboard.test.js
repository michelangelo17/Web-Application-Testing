import React from 'react'
import { render } from '@testing-library/react'
import Dashboard, { increaseBalls, increaseStrikes } from './Dashboard'

test('should render a Dashboard component', () => {
  render(<Dashboard />)
})

test('should contain a button for strike', () => {
  const { getByText } = render(<Dashboard />)
  getByText(/strike/i)
})

test('should contain a button for ball', () => {
  const { getByText } = render(<Dashboard />)
  getByText(/ball/i)
})

test('should contain a button for foul', () => {
  const { getByText } = render(<Dashboard />)
  getByText(/foul/i)
})

test('should contain a button for hit', () => {
  const { getByText } = render(<Dashboard />)
  getByText(/hit/i)
})

test('increaseBalls should increase passed in interger by 1', () => {
  expect(increaseBalls(0)).toBe(1) 
  expect(increaseBalls(3)).toBe(4) 
})

test('if passed in integer is 4, increaseBalls should reset interger to 0', () => {
  expect(increaseBalls(4)).toBe(0) 
})

test('increaseStrikes should increase passed in interger by 1', () => {
  expect(increaseStrikes(0)).toBe(1) 
  expect(increaseStrikes(2)).toBe(3) 
})

test('if passed in integer is 3, increaseBalls should reset interger to 0', () => {
  expect(increaseStrikes(3)).toBe(0) 
})
