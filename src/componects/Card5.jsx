import Card from 'react-bootstrap/Card';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { useEffect, useState, useContext } from 'react';
import CartContext from './practiceExample/cartcontext';

function CardFive() {
  const [electronic_items,setItem] = useState([]);
  const { addToCart } = useContext(CartContext); 
  useEffect(() => {
      fetch("https://6855017f6a6ef0ed6630de24.mockapi.io/store/electronic_items")
        .then((res) => res.json())
        .then((data) => setItem(data))
        .catch((err) => console.error("Error fetching products:", err));
    }, []);
  return (
    <>
      {electronic_items.map((item) => (
        <Card className='cardfive' >
          <div style={{ width: '14rem', padding:'10px', height: '190px' }}>
            <Card.Img style={{width: '100%'
              ,height: '100%'
              ,objectFit: 'contain'
            }} src={item.Img} ></Card.Img>
          </div>
          <Card.Body>
            <p className='parasna'>{item.productName}</p>
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
      ))}
    </>
  );
}

export default CardFive;