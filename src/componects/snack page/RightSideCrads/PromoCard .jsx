import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';

const PromoCard = () => {
  return (
    <Card
      className="p-4"
      style={{
        borderRadius: '15px',
        backgroundColor: 'rgb(205 171 184 / 24%)',
        border: 'none',
      }}
    >
      <Row className="align-items-center pt-3">
        {/* Text Content */}
        <Col >
          <div style={{ fontSize: '13px', color: '#999' }}>Oganic</div>
          <div style={{ fontSize: '30px', fontWeight: '700', lineHeight: '1.2' }}>
            Save 17% 
            on <span style={{ color: '#27ae60' }}>Organic</span>
            <span style={{ color: '#f39c12' }}> Juice</span>
          </div>
        </Col>

        {/* Image */}
        <Col>
          <Image
            src="	https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-11.png"
            alt="Juice"
            fluid
            style={{objectFit: 'contain' }}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default PromoCard;

