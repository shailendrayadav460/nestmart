
import Nav from 'react-bootstrap/Nav';



function Navfive() {
  return (

      <div className='fivediv'>
          <Nav className="me-100%" href="#home"><h3>Popular Products</h3></Nav>
          <Nav className="me-100% fs-6">
              <Nav.Link href="#home">All</Nav.Link>
              <Nav.Link href="#link">Milks & Dairies</Nav.Link>
              <Nav.Link href="#home">Coffes & Teas</Nav.Link>
              <Nav.Link href="#link">Pet Foods</Nav.Link>
              <Nav.Link href="#home">Meats</Nav.Link>
              <Nav.Link href="#link">Vegetables</Nav.Link>
              <Nav.Link href="#link">Fruits</Nav.Link>
          </Nav>
      </div>
  );
}

export default Navfive;