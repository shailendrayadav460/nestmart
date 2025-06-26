import Card from 'react-bootstrap/Card';
import React, { useEffect, useState ,useContext} from 'react';
// import cardtotalContext from './practiceExample/cartcontext';


function Home2Card() {
  const [products, setProducts] = useState([]);
   useEffect(() => {
    fetch("https://6855017f6a6ef0ed6630de24.mockapi.io/store/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
       .catch((err) => console.error("Error fetching products:", err));
   }, []);
   
  return (
    <>
      <div  >
        <li className='fgfhrerii ' >
          {products.map((item) => (
            <Card className='home2Card'>
              <Card.Body>
                <Card.Img className='imagecard' variant="top" src={item.image} />
                <h6> Some quick</h6>
                <p>{item.description}</p>
                <p>{item.inStock ? "✅ In Stock" : "❌ Out of Stock"}</p>
              </Card.Body>
            </Card>
          ))}
        </li>
      </div>
      
    </>
  );
}

export default Home2Card


