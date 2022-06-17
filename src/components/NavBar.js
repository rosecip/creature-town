import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/navbar";

const NavBar = (props) => {
  return (
    <Navbar sticky="top" className="nav-bar">
      <Container>
        <div className="nav-bar-contents">
          <Navbar.Brand className="you-are-in-creature-town">
            you are now in CREATURE TOWN...
          </Navbar.Brand>
          <div className="nav-bar-buttons">
            <button className="button explore-button">EXPLORE</button>
            <button className="button retreat-button">RETREAT</button>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
