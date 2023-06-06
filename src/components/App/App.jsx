import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Battle } from "../Battle/Battle";
import { Popular } from "../Popular/Popular";
import { Navigation } from "../Navigation/Navigation";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <Navigation />
        <Routes>
          <Route path="*" element={<Home />}></Route>
          <Route path="/battle" element={<Battle />}></Route>
          <Route path="/popular" element={<Popular />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
