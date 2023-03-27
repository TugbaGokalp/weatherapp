import React, { useState } from "react";
import { Navbar, Nav} from "react-bootstrap";

function App() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOverAnasayfa = () => {
    setIsHovering(true);
  };

  const handleMouseOutAnasayfa = () => {
    setIsHovering(false);
  };

  const [isHoveringİletisim, setİsHoveringİletisim] = useState(false);

  const handleMouseOverİletisim = () => {
    setİsHoveringİletisim(true);
  };

  const handleMouseOutİletisim = () => {
    setİsHoveringİletisim(false);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className="ms-5" href="#home">WEATHER APP🌦️</Navbar.Brand>
       
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link style={{backgroundColor: isHovering ? 'rgb(245, 172, 36)' : ''}} onMouseOver={handleMouseOverAnasayfa}
          onMouseOut={handleMouseOutAnasayfa} href="/">Ana Sayfa</Nav.Link>
            <Nav.Link style={{backgroundColor: isHoveringİletisim ? 'rgb(245, 172, 36)' : ''}} onMouseOver={handleMouseOverİletisim}
          onMouseOut={handleMouseOutİletisim} href="/iletisim">İletişim</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
