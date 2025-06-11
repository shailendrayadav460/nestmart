import Card from 'react-bootstrap/Card';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

function CardFive() {
  return (
    <>
      <Card className='cardfive' >
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
          <div className='progressbar'><div className='progr'></div></div><span id='delet'>Slod: 90/120</span>
          <div>
            <div className='delt' >
              <h6 id='heddet' >$28.85</h6>
              <del id='delet'>$32.0</del>
            </div>
            <button className='btnsnakadd' ><HiOutlineShoppingCart /> Add To Cart</button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardFive;