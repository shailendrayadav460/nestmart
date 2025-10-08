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
    fetch("https://68e5f78221dd31f22cc3906b.mockapi.io/store/products")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setProducts(data);
        else setProducts([]);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <ul className="product-flex">
      {products.map((item) => (
        <Card key={item.id} className="cardfive product-card" style={{ width: '14rem', margin: '10px' }}>
          {/* Image container */}
          <div style={{ width: '14rem', padding: '10px', height: '190px', cursor: 'pointer' }} onClick={() => goToDetails(item)}>
            <Card.Img
              src={item.Img}
              alt={item.name}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          <Card.Body>
            <p className="parasna">{item.productName}</p>
            <h6 className="parasna">
              {item.description || "Some quick example text to build on the card title."}
            </h6>

            <div className="rating">
              <div className="ratingstar">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarHalf />
              </div>
              <div id="delet">(4.0)</div>
            </div>

            <div className="progressbar">
              <div className="progr"></div>
            </div>
            <span id="delet">Sold: 90/120</span>

            <div>
              <div className="delt">
                <h6 id="heddet">${item.price}</h6>
                <del id="delet">$32.0</del>
              </div>

              <button className="btnsnakadd" onClick={() => addToCart(item, 1)}>
                <HiOutlineShoppingCart /> Add To Cart
              </button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </ul>
  );
}

export default Cardth;
