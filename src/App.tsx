import { Outlet } from "react-router-dom";
import styles from'./App.module.scss';
import Header from "./components/Layout/Header";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;

