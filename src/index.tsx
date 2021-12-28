import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.scss';
import App from "./App";
import Home from "./routes/home"
import Destination from "./routes/destination";
import Crew from "./routes/crew";
import Technology from "./routes/technology";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew  />} />
        <Route path="technology" element={<Technology />}>
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);


