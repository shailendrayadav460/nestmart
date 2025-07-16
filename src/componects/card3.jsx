import Card from 'react-bootstrap/Card';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { useEffect, useState, useContext } from 'react';
import CartContext from './practiceExample/cartcontext';
import { useNavigate } from 'react-router-dom';

function Cardth() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext); 
  const navigate = useNavigate();
  const goToDetails = (item) => {
    navigate(`/product/${item.id}`, { state: item });
  };
  useEffect(() => {
    fetch("https://6855017f6a6ef0ed6630de24.mockapi.io/store/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <ul className='product-flex'>
      {products.map((item) => (
        <Card key={item.id} style={{ width: '14rem',   }} className='product-card'>
          <Card.Img
            variant="top"
            src={item.image}
            onClick={() => goToDetails(item)}
          />
          <Card.Body className='card-body'>
            <p className='brand'>{item.name}</p>
            <h6 className='parasna'>{item.description}</h6>
            <div className='rating'>
              <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf />
              <span>(4.0)</span>
            </div>
            <div className='price-row'>
              <h6>${item.price}</h6> <del>$32.0</del>
            </div>
            <button className='butadd' onClick={() => addToCart(item, 1)}>
              <HiOutlineShoppingCart /> Add
            </button>
          </Card.Body>
        </Card>
      ))}
    </ul>
  );
}
export default Cardth;

