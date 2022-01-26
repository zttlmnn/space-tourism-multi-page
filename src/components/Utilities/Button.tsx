import React, { FC, useContext } from 'react';
import styles from './Button.module.scss';
import { TabAndSliderContext } from '../context/tabAndSlider-context';

type BtnObj = {
  className?: string; 
  text?: string,
  page: number
}

const Button: FC<BtnObj> = props => {
  const {setPage}  = useContext(TabAndSliderContext)

  const pageHandler = (direction: number) => {
    setPage(direction);
  };

    
  const cssStyle = [
    styles.button,
    props.className
  ];
  return (
    <button 
      className={cssStyle.join(' ')}
      onClick={pageHandler.bind(null, props.page)}
    >
      {props.text}
    </button>
  )
}

export default Button
