import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';

export interface SubMenuProps {
  index?: number;
  title: string;
  className?: string;
}
