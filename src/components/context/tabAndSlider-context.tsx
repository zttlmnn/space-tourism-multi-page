import React, { FC, useState } from 'react';

type PageObj = {
  page: number[],
  setPage: (page: number) => void
}

export const TabAndSliderContext = React.createContext<PageObj>({
  page: [0, 0],
  setPage: () => {}
})

const TabAndSliderContextProvider: FC = props => {
  const [[page, direction], setPage] = useState<number[]>([0, 0]);

  const setPageHandler = (page: number) => {
    setPage(prevPage  => {
      if(prevPage[0] < page) return [page, 1];
      else return [page, -1]
    })
  }

  console.log(page, direction);

  const contextValue={
    page: [page, direction],
    setPage: setPageHandler
  }

  return (
    <TabAndSliderContext.Provider value={contextValue}>
      {props.children}
    </TabAndSliderContext.Provider>
  )
}

export default TabAndSliderContextProvider;
