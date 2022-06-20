import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import OutdoorCreatures from "./components/OutdoorCreatures";
import SubwayCreatures from "./components/SubwayCreatures";

function App() {
  return (
    <Router>
      {<NavBar />}
      <Routes>
        <Route path="outdoor-creatures" element={<OutdoorCreatures />} />
        <Route path="subway-creatures" element={<SubwayCreatures /> } />
      </Routes>
    </Router>
  );
}

export default App;
