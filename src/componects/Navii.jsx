
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
import { Link } from 'react-router-dom';
import { CartContext } from './practiceExample/cartcontext';// <-- import context
import { useContext, useState } from 'react';

function Navii() {
const { cartItems } = useContext(CartContext);
const cartCount = cartItems.reduce((acc, item) => acc + item.quantity,(0));
const [bgColor, setBgColor] = useState("white");
const handleChangeColor = () => {
    setBgColor("green");
  };

  return (
    <>
      <div className='custom-border'>
        <Container fluid>
          <Navbar className="justify-content-between">
            <Row>
              <Col xs={6} md={4}>
                <Image src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/logo.svg" rounded />
              </Col>
            </Row>
            <Form inline>
              <Row className='mainsndsearch'>
                <Col>
                  <NavDropdown title="All Categories" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">IN</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">ME</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">EU</NavDropdown.Item>
                  </NavDropdown>
                </Col>
                |
                <Col>
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
              <Nav.Link as={Link} to='/Compare'><GoGitCompare /> Compare <span id='strateline'>|</span></Nav.Link>
              <Nav.Link as={Link} to='/Wishlist'><FaRegHeart />Wishlist</Nav.Link>
              <Nav.Link as={Link} to='/cart'>
                <div className='d-flex'>
                  <div className='poiuytgjiuyds'>
                    <p className='poiuytgjiuy' style={{
                      backgroundColor: cartCount === 0 ? "transparent" : "#47c381"
                    }}>{cartCount}</p>
                  </div>
                  <IoCartOutline className='mt-1' /> Cart
                </div>
              </Nav.Link>
              <Nav.Link href="/Account"><VscAccount />Account</Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </div>
    </>
  );
}

export default Navii;
