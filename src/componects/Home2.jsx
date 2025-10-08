import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';// 👈 Make sure to import the CSS

function Home2Card() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://68e5f78221dd31f22cc3906b.mockapi.io/store/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // 🔁 Duplicate products for seamless loop
  const loopProducts = [...products, ...products];

  return (
 <div className="scroll-wrapper">
  <div className="scroll-track">
    {loopProducts.map((item, index) => (
      <Card className="home2Card" key={index}>
        <Card.Img
          className="imagecard"
          variant="top"
          src={item.Img}
          style={{ padding: '10px' }}
        />
      </Card>
    ))}
  </div>
</div>
  );
}

export default Home2Card;
