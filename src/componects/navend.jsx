import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavLink from 'react-bootstrap/esm/NavLink';
import { SiFacebook } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";



function Navend() {
  return (
    <div>
      <div className='lastnav'>
        <Navbar bg="white" color='drak' >
                  <Container fluid d='flex' justify-content='' >
                      <Nav className="me-100% small">
                          <Nav.Link href="#home">© 2024, Nest - HTML Ecommerce Template <br />All rights reserved </Nav.Link>            </Nav>
                      <Nav className="me-100%">
                          <div className='dsisedf' >
                              <div className='lastndfkdf'>
                                  <div id='callicon'><LuPhoneCall /></div>
                                  <div>
                                      <h4 style={{ color: '#5ead7f', margin: '0' }}>1900 - 8888</h4>
                                      <p style={{ fontSize: '11.5px', color: 'gray' }}>Working 8:00 - 22:00</p>
                                  </div>
                              </div>
                              <div className='lastndfkdf'>
                                  <div id='callicon'><LuPhoneCall /></div>
                                  <div>
                                      <h4 style={{ color: '#5ead7f', margin: '0' }}>4500 - 8552</h4>
                                      <p style={{ fontSize: '11.5px', color: 'gray' }}>24/7 Support Center</p>
                                  </div>
                              </div>
                          </div>
                        </Nav>
                      <Nav className="me-100% pt-3">
                          <Nav.Link href="#home">
                              <div className='dsisix'>
                                  <h6 id='hkjfgdf'>Follow Us </h6>
                                  <div className='dsisedf' >
                                      <div id='logolst' > <SiFacebook /> </div>
                                      <div id='logolst'><AiFillTwitterCircle /></div>
                                      <div id='logolst'><FaInstagram /></div>
                                      <div id='logolst'><IoLogoYoutube /></div>
                                      <div id='logolst'><FaSnapchat /></div>
                                  </div>
                              </div>
                              <Nav className="me-100% small">
                                  <p style={{color: 'gray'}}>Up to 15% discount on your first subscribe</p>
                              </Nav>
                          </Nav.Link>
                      </Nav>
                  </Container>
        </Navbar>
      </div>
    </div>
  )
}

export default Navend
