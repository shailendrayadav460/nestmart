import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navfour() {
  return (
    <Navbar expand="lg" className="bg-body p-3 pb-0">
        <Navbar.Brand href="#home"><h3>Featured Categories</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <p className='fontchn mt-1 ms-2'>Cake & milk</p>
            <p className='fontchn mt-1 '>Coffes & Teas</p>
            <p className='fontchn mt-1'>Pet Foods</p>
            <p className='fontchn mt-1'>Vegetables</p>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navfour;






