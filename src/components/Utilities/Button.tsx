import React, { FC, useContext } from 'react'
import { TabAndSliderContext } from '../context/tabAndSlider-context';

type BtnObj = {
  className?: string; 
  text?: string,
  state: number
}

const Button: FC<BtnObj> = props => {
  const {setState: setDestinationState} = useContext(TabAndSliderContext)


  const destinationHandler = (destination: number) => {
    setDestinationState(destination);

  };
  return (
    <button 
      className={props.className}
      onClick={destinationHandler.bind(null, props.state)}
    >
      {props.text}
    </button>
  )
}

export default Button
