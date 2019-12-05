import React, { useState } from 'react'
import Display from './components/Display'
import Dashboard from './components/Dashboard'

function App() {
  const [counters, setCounters] = useState({balls: 0, strikes: 0})
  return (
    <>
      <h1>Baseball Counter</h1>
      <Display counters={counters}/>
      <Dashboard setCounters={setCounters} counters={counters} />
    </>
  )
}

export default App
