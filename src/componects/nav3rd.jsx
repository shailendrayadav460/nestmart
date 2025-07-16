import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { TbBorderAll } from "react-icons/tb";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import React, { useState } from "react";
import Venderlist from './navlist/venderlist';
import MegaMenupg from './navlist/MegaMenupg';
import Blogpg from './navlist/Blog';
import Pages from './navlist/Pages';
import Home from './navlist/home';
import Shop from './navlist/shop';
import BroallCoteg from './navlist/BroallCoteg';
import Button from 'react-bootstrap/esm/Button';



function Naviii() {

 
  return (
    <>
      <div className='custom-bd'>
        <Navbar  >
          <Container fluid d='flex' justify-content='Space-between' >
            <Button className='bg-success pe-3 pt-3 b-0' >
              <BroallCoteg  />
            </Button>
            <Nav className="me-100%">
              <ul className='alfdfdf' >
                <li>
                  <a id='artft' href='/Snack'>Deals</a>
                </li>
                <li>
                  <Home/>
                </li>
                <li className='ms-4'>
                  <a id='artft' href='/Account'>About</a>
                </li>
                <li>
                  <Shop/>
                </li>
                <li>
                  <Venderlist />
                </li>
                <li>
                 <MegaMenupg />
                </li>
                <li>
                  <Blogpg/>
                </li>
                <li>
                  <Pages />
                </li>
                <li className='ms-4'>
                  <a id='artft' href='/Contact'>Contact</a>
                </li>
              </ul>
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
