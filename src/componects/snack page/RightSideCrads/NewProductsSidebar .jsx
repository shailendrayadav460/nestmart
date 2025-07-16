import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const products = [
  {
    name: 'Chen Cardigan',
    price: '$99.50',
    rating: 5,
    image: 'https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-3.jpg',
  },
  {
    name: 'Chen Sweater',
    price: '$89.50',
    rating: 4,
    image: 'https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-4.jpg',
  },
  {
    name: 'Colorful Jacket',
    price: '$25',
    rating: 3,
    image: 'https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-5.jpg',
  },
];

const renderStars = (rating) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <>
      {Array(full).fill(<FaStar color="#ffc107" />)}
      {half && <FaStarHalfAlt color="#ffc107" />}
      {Array(empty).fill(<FaRegStar color="#ccc" />)}
    </>
  );
};

const NewProductsSidebar = () => {
  return (
    <Card className="p-3" style={{ borderRadius: '15px', boxShadow: '0 0 10px rgba(0,0,0,0.05)' }}>
      <h5 style={{ fontWeight: '600', marginBottom: '10px' }}>New products</h5>
      <hr style={{ borderTop: '2px solid #e1f3e7', width: '60px', marginBottom: '15px' }} />

      {products.map((item, index) => (
        <div key={index}>
          <Row className="align-items-center mb-3">
            <Col xs={6} className='w-25'>
              <Image src={item.image} alt={item.name} fluid rounded />
            </Col>
            <Col xs={6}>
              <div style={{ color: '#0c6', fontWeight: '500', fontSize: '14px' }}>{item.name}</div>
              <div style={{ fontSize: '14px', color: '#333' }}>{item.price}</div>
              <div className="d-flex" style={{ fontSize: '12px' }}>{renderStars(item.rating)}</div>
            </Col>
          </Row>
          {index !== products.length - 1 && <hr className="my-2" />}
        </div>
      ))}
    </Card>
  );
};

export default NewProductsSidebar;
