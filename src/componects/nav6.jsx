
import Nav from 'react-bootstrap/Nav';

function NavSix() {
  return (

      <div className='fivediv'>
          <Nav className="me-100%" href="#home"><h3>Daily Best Sells</h3></Nav>
          <Nav className="me-100% fs-6">
              <Nav.Link href="#home">Featured</Nav.Link>
              <Nav.Link href="#link">Popular</Nav.Link>
              <Nav.Link href="#home">New added</Nav.Link>
          </Nav>
      </div>
  );
}

export default NavSix;