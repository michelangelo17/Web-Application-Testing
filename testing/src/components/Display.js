import React from 'react'

const Display = props => {
  console.log()
  return(
  <>
    <h2 data-testid='ballDisplay'>Balls: {props.counters.balls}</h2>
    <h2 data-testid='strikeDisplay'>Strikes: {props.counters.strikes}</h2>
  </>
)
  }
export default Display