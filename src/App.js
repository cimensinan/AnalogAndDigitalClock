import React from 'react'
import AnalogClock from './AnalogClock/analog-clock'
import DijitalClock from './DijitalClock/dijital-clock'
import "./app.scss"

const App = () => {
  return (
    <div>
      <AnalogClock/>
      <DijitalClock textColor="" bgColor=""/>
    </div>
  )
}

export default App
