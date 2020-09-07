import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import LikeButton from './components/LikeButton'
import MousesTracker from './components/MousesTracker'
import useMousePosition from './hooks/useMousePosition'
function App() {
  const [show, setShow] = useState(true)
  const positions = useMousePosition()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          onClick={() => {
            setShow(!show)
          }}
        >
          toggleShowMouse
        </button>
        <p>
          X:{positions.x},Y:{positions.y}
        </p>
        {/* {show && <MousesTracker />} */}
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
