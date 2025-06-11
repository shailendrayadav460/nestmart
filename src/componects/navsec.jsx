import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaCheck } from "react-icons/fa6";



function Navsec() {
  return (
    <div>
      <div className='custom-bd'>
        <Navbar  >
        <Container fluid d='flex' justify-content='Space-between' >
          <p id='pagfd'>
            We found 29 items for you!
          </p>
          <Nav className="me-100%" >
            <NavDropdown title="Shop:50" id="arrowdropdown" className='buttonsfd'>
              <NavDropdown.Item eventKey="4.1"><FaCheck />50</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">100</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">150</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">200</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">All</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Sort by:Featured' id="nav-dropdown" className='buttonsfd'>
              <NavDropdown.Item eventKey="4.1"><FaCheck />Featured</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Price:Low to High</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Price:High to Low</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Release Date</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Avg. Rating</NavDropdown.Item>
            </NavDropdown>  
          </Nav>
        </Container>
      </Navbar>
      </div>
    </div>
  )
}

export default Navsec
