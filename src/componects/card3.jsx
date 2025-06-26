import Card from 'react-bootstrap/Card';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { useEffect, useState, useContext } from 'react';
import CartContext from './practiceExample/cartcontext';

function Cardth() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext); 

  useEffect(() => {
    fetch("https://6855017f6a6ef0ed6630de24.mockapi.io/store/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <ul className='adfdlkfdlklll'>
      {products.map((item) => (
        <Card key={item.id} style={{ width: '15rem' }}>
          <Card.Img className='preriii' variant="top" src={item.image} onClick={() => addToCart(item)} />
          <Card.Body>
            <p className='parasna'>{item.name}</p>
            <h6 className='parasna'>{item.description}</h6>
            <div className='rating'>
              <div className='ratingstar'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf /></div>
              <div id='delet'>(4.0)</div>
            </div>
            <p className='old'>By <span id='heddet'>Old El Paso</span></p>
            <div className='delt'>
              <div><h6 id='heddet'>${item.price}</h6> <del id='delet'>$32.0</del></div>
              <button className='btnsnak' onClick={() => addToCart(item)}><HiOutlineShoppingCart /> Add</button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </ul>
  );
}

export default Cardth;



// import { useContext } from 'react';
// import CartContext from './practiceExample/cartcontext'; // ✅ import context

// function Cardth() {
//   const { addToCart } = useContext(CartContext); // ✅

  

//   return (
//     <>
//       {products.map((items) => (
//         <Card style={{ width: '15rem' }} key={items.name}>
         
//           <button
//             className='btnsnak'
//             onClick={() => addToCart(items)} // ✅ onClick
//           >
//             <HiOutlineShoppingCart /> Add
//           </button>
//         </Card>
//       ))}
//     </>
//   );
// }


// export default Cardth;