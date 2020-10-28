import React, { createContext, useState } from 'react';
import classNames from 'classnames';
import { MenuItemProps } from './menuItem';

type MenuMode = 'horizontial' | 'vertial';
type onSelectCallBack = (selectIndex: number) => void;
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: onSelectCallBack;
}
interface IMenuContext {
  index: number;
  onSelect?: onSelectCallBack;
}
export const MenuContext = createContext<IMenuContext>({
  index: 0,
});
const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, style, onSelect, children } = props;
  const [currentActive, setActive] = useState(defaultIndex);
  const handleClick = (index: number) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: IMenuContext = {
    index: currentActive || 0,
    onSelect: handleClick,
  };
  const classes = classNames('viking-meun', className, {
    'menu-vertial': mode === 'vertial',
    'menu-horizontal': mode !== 'vertial',
  });
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, { index });
      }
      console.error('警告！Menu子组件只能为MenuItem组件');
    });
  };
  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>{renderChildren()}</MenuContext.Provider>
    </ul>
  );
};
Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontial',
};
export default Menu;
