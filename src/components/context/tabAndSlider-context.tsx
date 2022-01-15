import React, { FC, useState } from 'react';

type ContextObj = {
  state: number,
  setState: (stateValue: number) => void
}


export const TabAndSliderContext = React.createContext<ContextObj>({
  state: 0,
  setState: () => {}
})


const TabAndSliderContextProvider: FC = props => {
  const [state, setState] = useState<number>(0);

  const setStateHandler = (stateValue: number) => {
    setState(stateValue)
  }


  const contextValue={
    state: state,
    setState: setStateHandler
  }

  return (
    <TabAndSliderContext.Provider value={contextValue}>
      {props.children}
    </TabAndSliderContext.Provider>
  )
}

export default TabAndSliderContextProvider;
