
import Nav from 'react-bootstrap/Nav';



function Navfive() {
  return (

      <div className='fivediv'>
          <Nav className="me-100%" href="#home"><h3>Popular Products</h3></Nav>
          <Nav className="me-100% fs-6 justify-content-between">
              <p  className='fontchn'>All</p>
              <p className='fontchn'>Milks & Dairies</p>
              <p className='fontchn'>Coffes & Teas</p>
              <p className='fontchn'>Pet Foods</p>
              <p className='fontchn'>Meats</p>
              <p className='fontchn'>Vegetables</p>
              <p className='fontchn'>Fruits</p>
          </Nav>
      </div>
  );
}

export default Navfive;