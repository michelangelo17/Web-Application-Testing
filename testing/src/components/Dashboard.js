import React from 'react'

export const increaseBalls = count => (count > 3 ? (count = 0) : ++count)
export const increaseStrikes = count => (count > 2 ? (count = 0) : ++count)
export const increaseFoulStrikes = count => (count >= 2 ? count : ++count)

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
  const handleFouls = () =>
    props.setCounters({
      ...props.counters,
      strikes: increaseFoulStrikes(props.counters.strikes),
    })
  const handleHits = () =>
    props.setCounters({
      strikes: 0,
      balls: 0,
    })
  return (
    <>
      <button data-testid='strikeButton' onClick={handleStrikes} type='button'>
        Strike
      </button>
      <button data-testid='ballButton' onClick={handleBalls} type='button'>
        Ball
      </button>
      <button data-testid='foulButton' onClick={handleFouls} type='button'>
        Foul
      </button>
      <button data-testid='hitButton' onClick={handleHits} type='button'>
        Hit
      </button>
    </>
  )
}

export default Dashboard
