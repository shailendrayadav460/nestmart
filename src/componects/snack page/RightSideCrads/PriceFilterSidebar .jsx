import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PriceFilterSidebar = () => {
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(1000);
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate('/Wishlist');
  }

  return (
    <Card className="p-3" style={{ borderRadius: '15px', boxShadow: '0 0 10px rgba(0,0,0,0.05)' }}>
      <h5 style={{ fontWeight: '600', marginBottom: '10px' }}>Fill by price</h5>
      <hr style={{ borderTop: '2px solid #e1f3e7', width: '50px', marginBottom: '15px' }} />

      {/* Range Slider */}
      <div>
        <Form.Range
          value={minPrice}
          min={0}
          max={1000}
          onChange={(e) => setMinPrice(parseInt(e.target.value))}
          style={{ marginBottom: '5px' }}
        />
        <Form.Range
          value={maxPrice}
          min={0}
          max={1000}
          onChange={(e) => setMaxPrice(parseInt(e.target.value))}
        />
        <div className="d-flex justify-content-between text-success fw-semibold" style={{ fontSize: '14px' }}>
          <span>From: ${minPrice}</span>
          <span>To: ${maxPrice}</span>
        </div>
      </div>

      {/* Color Filters */}
      <div className="mt-4">
        <strong style={{ fontSize: '14px' }}>Color</strong>
        <Form.Check type="checkbox" label="Red (56)" />
        <Form.Check type="checkbox" label="Green (78)" />
        <Form.Check type="checkbox" label="Blue (54)" />
      </div>

      {/* Item Condition */}
      <div className="mt-3">
        <strong style={{ fontSize: '14px' }}>Item Condition</strong>
        <Form.Check type="checkbox" label="New (1506)" />
        <Form.Check type="checkbox" label="Refurbished (27)" />
        <Form.Check type="checkbox" label="Used (45)" />
      </div>

      {/* Filter Button */}
      <Button onClick={handleClick} variant="success" className="w-100 mt-4 d-flex justify-content-center align-items-center gap-2">
        <i className="bi bi-funnel"></i> Filter
      </Button>

      {/* Optional Image */}
      {/* <div className="optinoalImage">
        <Image src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/fillter-widget-bg.png" alt="Filter image" fluid style={{ maxHeight: '80px' }} />
      </div> */}
    </Card>
  );	
};

export default PriceFilterSidebar;
