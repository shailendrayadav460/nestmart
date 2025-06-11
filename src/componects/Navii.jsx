import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { GoGitCompare } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'; // 👈 this is necessary





function Navii() {
  return (
    <>
       <div className='custom-border' > 
        <Container fluid >
        <Navbar className=" justify-content-between ">
          <Row>
            <Col xs={6} md={4}>
              <Image src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/logo.svg" rounded />
            </Col>
          </Row>
          <Form inline>
            <Row className='mainsndsearch'> 
              <Col>
                <NavDropdown title="All Categories" id="nav-dropdown">
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder=""
                    />
                  </Col>
                  <NavDropdown.Item eventKey="4.1">IN</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.2">ME</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.3">EU</NavDropdown.Item>
                </NavDropdown>
              </Col>|
              <Col >
                <input
                  type="text"
                  placeholder="Search for items..."
                  className='inputse'
                />
              </Col>
              <Col><IoSearchOutline /></Col>
            </Row>
          </Form>
          <Nav className="me-100%">
            <Nav.Link href="#home"><GoGitCompare />Compare <span id='strateline'>|</span> </Nav.Link>
            <Nav.Link as={Link}  to='/Secndp' ><FaRegHeart />Secndp</Nav.Link>
            <Nav.Link href="#pricing"><IoCartOutline />Cart <span>|</span></Nav.Link>
            <Nav.Link href="#pricing"><VscAccount />Account</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
      </div>
    </>
  )
}

export default Navii
