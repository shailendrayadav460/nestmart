import Nav from 'react-bootstrap/Nav';

function NavSix() {
  return (

      <div className='fivediv'>
          <Nav className="me-100%" href="#home"><h3>Daily Best Sells</h3></Nav>
          <Nav className="me-100% fs-6 justify-content-between ">
              <p className='fontchn pe-4' >Featured</p>
              <p className='fontchn pe-4' >Popular</p>
              <p  className='fontchn pe-4' >New added</p>
          </Nav>
      </div>
  );
}
export default NavSix;