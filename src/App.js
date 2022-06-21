import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import OutdoorCreatures from "./components/OutdoorCreatures";
import SubwayCreatures from "./components/SubwayCreatures";
import HomeCreatures from "./components/HomeCreatures";
import StoreCreatures from "./components/StoreCreatures";

function App() {
  return (
    <Router>
      {<NavBar />}
      <Routes>
        <Route path="outdoor-creatures" element={<OutdoorCreatures />} />
        <Route path="subway-creatures" element={<SubwayCreatures />} />
        <Route path="home-creatures" element={<HomeCreatures />} />
        <Route path="store-creatures" element={<StoreCreatures /> } />
      </Routes>
    </Router>
  );
}

export default App;
