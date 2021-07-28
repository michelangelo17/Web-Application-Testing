import React from 'react'

const Display = props => (
  <>
    <h2 data-testid='ballDisplay'>Balls: {props.counters.balls}</h2>
    <h2 data-testid='strikeDisplay'>Strikes: {props.counters.strikes}</h2>
    <h2 data-testid='outDisplay'>Outs: {props.counters.outs}</h2>
    <h2 data-testid='runDisplay'>Runs: {props.counters.runs}</h2>
    <h2 data-testid='errorDisplay'>Errors: {props.counters.errors}</h2>
  </>
)

export default Display
