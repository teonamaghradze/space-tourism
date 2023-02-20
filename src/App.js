import { Routes, Route } from "react-router-dom";
import Header from "./Header.js";
import Destination from "./Destination.js";
import Home from "./Home.js";
import Crew from "./Crew.js";
import Technology from "./Technology.js";
import { useState } from "react";

function App() {
  const [switchTab, setSwitchTab] = useState(0);
  const handleClick = (num) => {
    setSwitchTab(num);
    console.log(switchTab);
  };
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/destination"
          element={
            <Destination handleClick={handleClick} switchTab={switchTab} />
          }
        />
        <Route
          path="/crew"
          element={<Crew handleClick={handleClick} switchTab={switchTab} />}
        />
        <Route
          path="/technology"
          element={
            <Technology handleClick={handleClick} switchTab={switchTab} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
