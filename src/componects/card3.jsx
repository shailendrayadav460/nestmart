import Card from 'react-bootstrap/Card';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

function Cardth() {

  return (
    <>
      <div>
        <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src="	https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-1-1.jpg" >
        </Card.Img>
        <Card.Body>
          <p className='parasna'>Snack</p>
          <h6 className='parasna'>
            Some quick example text to build on the card title .
          </h6>
          <div className='rating'>
            <div className='ratingstar'>
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStarHalf />
            </div>
            <div id='delet'>(4.0)</div>
          </div>
          <p className='old'>By <span id='heddet'>Old El Paso</span></p>
          <div className='delt'>
            <div className='delt' ><h6 id='heddet' >$28.85</h6>
              <del id='delet'>$32.0</del></div>
            <button className='btnsnak' ><HiOutlineShoppingCart /> Add</button>
          </div>
        </Card.Body>
      </Card>
      </div>
    </>
  );
}

export default Cardth;