import React, { FC, useState } from "react";

type PageObj = {
  page: number[];
  setPage: (page: number) => void;
};

export const PageContext = React.createContext<PageObj>({
  page: [0, 0],
  setPage: () => {},
});

const PageContextProvider: FC = (props) => {
  const [[page, direction], setPage] = useState<number[]>([0, 0]);

  const setPageHandler = (page: number) => {
    setPage((prevPage) => {
      if (prevPage[0] < page) return [page, 1];
      else return [page, -1];
    });
  };

  console.log(page, direction);

  const pageContextValue = {
    page: [page, direction],
    setPage: setPageHandler,
  };

  return (
    <PageContext.Provider value={pageContextValue}>
      {props.children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
