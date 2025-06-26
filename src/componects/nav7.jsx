import Nav from 'react-bootstrap/Nav';


function Navsevenx() {
  return (

      <div className='fivediv'>
          <Nav className="me-100%" href="#home"><h3>Deals of The Day</h3></Nav>
          <Nav className="me-100% fs-6">
              <Nav.Link href="#home">All Deals&gt;</Nav.Link>
          </Nav>
      </div>
  );
}

export default Navsevenx;