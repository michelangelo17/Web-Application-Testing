import React from 'react'
import { render } from '@testing-library/react'
import Dashboard, {
  increaseBalls,
  increaseStrikesandOuts,
  increaseFoulStrikes,
} from './Dashboard'

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

test('should contain a button for hit/walk', () => {
  const { getByText } = render(<Dashboard />)
  getByText(/hit\/walk/i)
})

test('should contain a button for out', () => {
  const { getByText } = render(<Dashboard />)
  getByText(/out/i)
})

test('should contain a button for run', () => {
  const { getByText } = render(<Dashboard />)
  getByText(/run/i)
})

test('should contain a button for error', () => {
  const { getByText } = render(<Dashboard />)
  getByText(/error/i)
})

test('increaseBalls should increase passed in interger by 1', () => {
  expect(increaseBalls(0)).toBe(1)
  expect(increaseBalls(3)).toBe(4)
})

test('if passed in integer is 4, increaseBalls should reset interger to 0', () => {
  expect(increaseBalls(4)).toBe(0)
})

test('increaseStrikesandOuts should increase passed in interger by 1', () => {
  expect(increaseStrikesandOuts(0)).toBe(1)
  expect(increaseStrikesandOuts(2)).toBe(3)
})

test('if passed in integer is 3, increaseStrikesandOuts should reset interger to 0', () => {
  expect(increaseStrikesandOuts(3)).toBe(0)
})

test('increaseFoulStrikes should increase passed in interger by 1', () => {
  expect(increaseFoulStrikes(0)).toBe(1)
  expect(increaseFoulStrikes(1)).toBe(2)
})

test('if passed in integer is 2, increaseFoulStrikes should do nothing', () => {
  expect(increaseFoulStrikes(2)).toBe(2)
})
