import React from 'react'

export const increaseBalls = count => (count > 3 ? (count = 0) : ++count)
export const increaseStrikesandOuts = count =>
  count > 2 ? (count = 0) : ++count
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
      strikes: increaseStrikesandOuts(props.counters.strikes),
    })
  const handleFouls = () =>
    props.setCounters({
      ...props.counters,
      strikes: increaseFoulStrikes(props.counters.strikes),
    })
  const handleHits = () =>
    props.setCounters({
      ...props.counters,
      strikes: 0,
      balls: 0,
    })
  const handleOuts = () =>
    props.setCounters({
      ...props.counters,
      outs: increaseStrikesandOuts(props.counters.outs),
      strikes: 0,
      balls: 0,
    })
  const handleRuns = () =>
    props.setCounters({
      ...props.counters,
      runs: ++props.counters.runs,
      strikes: 0,
      balls: 0,
    })
  const handleErrors = () =>
    props.setCounters({
      ...props.counters,
      errors: ++props.counters.errors,
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
      <button data-testid='hitWalkButton' onClick={handleHits} type='button'>
        Hit/Walk
      </button>
      <button data-testid='outButton' onClick={handleOuts} type='button'>
        Out
      </button>
      <button data-testid='runButton' onClick={handleRuns} type='button'>
        Run
      </button>
      <button data-testid='errorButton' onClick={handleErrors} type='button'>
        Error
      </button>
    </>
  )
}

export default Dashboard
