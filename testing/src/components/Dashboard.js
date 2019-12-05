import React from 'react'

export const increaseBalls = count => (count > 3 ? (count = 0) : ++count)
export const increaseStrikes = count => (count > 2 ? (count = 0) : ++count)
const Dashboard = props => {
  const handleBalls = () =>
    props.setCounters({
      ...props.counters,
      balls: increaseBalls(props.counters.balls),
    })
  const handleStrikes = () =>
    props.setCounters({
      ...props.counters,
      strikes: increaseStrikes(props.counters.strikes),
    })
  return (
    <>
      <button data-testid='strikeButton' onClick={handleStrikes} type='button'>
        Strike
      </button>
      <button data-testid='ballButton' onClick={handleBalls} type='button'>
        Ball
      </button>
      <button type='button'>Foul</button>
      <button type='button'>Hit</button>
    </>
  )
}

export default Dashboard
