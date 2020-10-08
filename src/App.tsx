import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';

function App() {
  return (
    <div className="App">
      <Menu
        defaultIndex={1}
        onSelect={(index) => {
          console.log(index);
        }}
      >
        <MenuItem index={0} disabled>
          1
        </MenuItem>
        <MenuItem index={1}>2</MenuItem>
        <MenuItem index={2}>3</MenuItem>
      </Menu>
      <header className="App-header">
        <Button disabled>Disable Button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          Large Primary Button
        </Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com">
          Baidu
        </Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>
          Baidu
        </Button>
        <hr />
      </header>
    </div>
  );
}

export default App;
