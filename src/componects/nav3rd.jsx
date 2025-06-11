import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { TbBorderAll } from "react-icons/tb";
import { MdOutlineHeadsetMic } from "react-icons/md";


function Naviii() {
  return (
    <>
      <div className='custom-bd'>
        <Navbar  >
        <Container fluid d='flex' justify-content='Space-between' >
          <div className='button'>
            <NavDropdown title= " All Browse Categories" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1"><TbBorderAll />IN</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">ME</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">EU</NavDropdown.Item>
            </NavDropdown>
          </div>
          <Nav className="me-100%">
            <NavDropdown title="Deals" id="nav-dropdown" >
              <NavDropdown.Item eventKey="4.1">IN</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">ME</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">EU</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Home" id="nav-dropdown" className="dropbtn">
              <NavDropdown.Item eventKey="4.1">IN</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">ME</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">EU</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">IN</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">ME</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">EU</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Shop" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Francais</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Deutsch</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Pyccknn</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Vendors" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">IN</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">ME</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">EU</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Mega Menu" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">IN</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">ME</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">EU</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">IN</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">ME</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">EU</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pages" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">IN</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">ME</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">EU</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Contact" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">IN</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">ME</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">EU</NavDropdown.Item>
            </NavDropdown>
          </Nav>
            <div className='thirdnav'>
              <div className='headphone'><MdOutlineHeadsetMic /></div>
              <div >
                <h4 id='hed1' >1900 - 888</h4>
                <p id='para'>24/7 Support Center</p>
              </div>
            </div> 
        </Container>
      </Navbar>
      </div>
    </>
  )
}

export default Naviii
