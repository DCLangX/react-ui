import React, { useState } from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
        <Button btnType={ButtonType.Link} href='https://www.baidu.com'>Baidu</Button>
        <hr />
      </header>
    </div>
  )
}

export default App
