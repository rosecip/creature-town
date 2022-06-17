import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import OutdoorCreatures from "./components/OutdoorCreatures";

function App() {
  return (
    <Router>
      {<NavBar />}
      <Routes>
        <Route path="/" element={<OutdoorCreatures />} />
      </Routes>
    </Router>
  );
}

export default App;
