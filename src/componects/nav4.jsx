import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navfour() {
  return (
    <Navbar expand="lg" className="bg-body p-3">
        <Navbar.Brand href="#home"><h3>Featured Categories</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Cake & milk</Nav.Link>
            <Nav.Link href="#link">Coffes & Teas</Nav.Link>
            <Nav.Link href="#home">Pet Foods</Nav.Link>
            <Nav.Link href="#link">Vegetables</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navfour;