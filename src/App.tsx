import React from 'react';
import logo from './logo.svg';
import './App.css';
import BreakLength from './breakLength';
import PausePlay from './pauseAndPlay';
import TimerSession from './timerSession';
import SessionLength from './sessionLength';
import { useSelector } from 'react-redux'
import { RootState } from './index'

function App() {
  const breaklabelSelector = useSelector((state: RootState) => state.breakLengthValue)
  const sessionlabelSelector = useSelector((state: RootState) => state.sessionLengthValue)

  return (
    <div className="App">
     <h1>25 + 5 Clock</h1>
     <h3>Break Length</h3>
      <BreakLength direction={"Break-up"} />
      <label>{breaklabelSelector}</label>
      <BreakLength direction={"Break-down"} />
      <h3>Session Length</h3>
      <BreakLength direction={"Session-up"} />
      <label>{sessionlabelSelector}</label>
      <BreakLength direction={"Session-down"} />
      <TimerSession  /> 
      <PausePlay pauseOrPlay={"pause"}/>  
      <PausePlay pauseOrPlay={"play"}/>  
    </div>
  );
}

export default App;
