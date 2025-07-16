import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const BreadcrumbNav = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body p-3 pb-0">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <p className='fontchn mt-1 ms-2' linkAs={Link} linkProps={{ to: "/" }}>Home</p>
            <p className='fontchn mt-1 ' linkAs={Link} linkProps={{ to: "/pages" }}>Pages</p>
            <p className='fontchn mt-1'>Contact</p>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='breafdfdfd'></div>
    </>
  );
};

export default BreadcrumbNav;