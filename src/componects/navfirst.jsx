
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavLink from 'react-bootstrap/esm/NavLink';



function Navfirst() {
  return (
    <>
      <div className='custom'>
        <Navbar bg="white" color='drak' >
          <Container fluid d='flex' justify-content='' >
            <Nav className="me-100%">
              <Nav.Link href="#home">About Us <span id='strateline'>|</span> </Nav.Link>
              <Nav.Link href="#features">My Account <span id='strateline'>|</span></Nav.Link>
              <Nav.Link href="#pricing">Wishlist <span id='strateline'>|</span></Nav.Link>
              <Nav.Link href="#pricing">Order tracking</Nav.Link>
            </Nav>
            <Nav className="me-100%"><NavLink>Hello, this is my e-commerce website</NavLink>
            </Nav>
            <Nav className="me-100%">
              <Nav.Link href="#home">Need help?Call Us:<span id='nober' >+180090052</span></Nav.Link>
              <NavDropdown title="English" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Francais</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Deutsch</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Pyccknn</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="USD" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">IN</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">ME</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">EU</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Navfirst
