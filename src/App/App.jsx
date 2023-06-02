import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { Battle } from "../components/Battle/Battle";
import { Popular } from "../components/Popular/Popular";
import { Navigation } from "../components/Navigation/Navigation";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/battle" element={<Battle />}></Route>
          <Route path="/popular" element={<Popular />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
