import React from 'react';
import { Button, Card, Image, Row, Col } from 'react-bootstrap';

// Main Component
function CartPopup() {
  const cartItems = [
    {
      name: "Daisy Casual Bag",
      price: 800,
      quantity: 1,
      image: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-3.jpg"
    },
    {
      name: "Corduroy Shirts",
      price: 3200,
      quantity: 1,
      image: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-2.jpg"
    }
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <Card style={{ width: '320px', borderRadius: '12px', padding: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        {cartItems.map((item, index) => (
          <Row className="mb-3 align-items-center" key={index}>
            <Col xs={3}>
              <Image src={item.image} fluid rounded />
            </Col>
            <Col xs={7}>
              <div style={{ fontWeight: '500', color: '#3BB77E', fontSize: '15px' }}>{item.name}</div>
              <div style={{ fontSize: '14px', color: '#777' }}>
                {item.quantity} × ${item.price.toFixed(2)}
              </div>
            </Col>
            <Col xs={2} className="text-end">
              <span style={{ cursor: 'pointer', fontSize: '18px', color: '#999' }}>&times;</span>
            </Col>
          </Row>
        ))}

        <hr />

        <Row className="mb-3">
          <Col style={{ fontWeight: '500' }}>Total</Col>
          <Col style={{ textAlign: 'right', fontWeight: '700', color: '#3BB77E' }}>
            ${total.toFixed(2)}
          </Col>
        </Row>

        <Row className="gap-2 justify-content-between px-2">
          <Button variant="outline-success" style={{ width: '47%' }}>View cart</Button>
          <Button variant="success" style={{ width: '47%' }}>Checkout</Button>
        </Row>
      </Card>
    </div>
  );
}

export default CartPopup;
