import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import App from "./App";
import Home from "./routes/home";
import Destination from "./routes/destination";
import Crew from "./routes/crew";
import Technology from "./routes/technology";
import PageContextProvider from "./components/context/page-context";
import Error from "./components/Utilities/Error";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <PageContextProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />}></Route>
          <Route
            path="*"
            element={
              <main>
                <Error />
              </main>
            }
          />
        </Route>
      </Routes>
    </PageContextProvider>
  </BrowserRouter>,
  rootElement
);
