import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const locations = [
  {
    title: 'Office',
    address: '205 North Michigan Avenue, Suite 810',
    city: 'Chicago, 60601, USA',
    phone: '(123) 456-7890',
    email: 'contact@Evara.com',
  },
  {
    title: 'Studio',
    address: '205 North Michigan Avenue, Suite 810',
    city: 'Chicago, 60601, USA',
    phone: '(123) 456-7890',
    email: 'contact@Evara.com',
  },
  {
    title: 'Shop',
    address: '205 North Michigan Avenue, Suite 810',
    city: 'Chicago, 60601, USA',
    phone: '(123) 456-7890',
    email: 'contact@Evara.com',
  },
];

const LocationsSection = () => {
  return (
    <Container className="py-5">
      <Row className="g-4">
        {locations.map((loc, idx) => (
          <Col key={idx} md={4}>
            <Card className="border-0 text-center">
              <Card.Body className='card-bodys'>
                <Card.Title className="text-success fw-bold fs-4 mb-3">{loc.title}</Card.Title>
                <Card.Text className="text-muted mb-1">{loc.address}</Card.Text>
                <Card.Text className="text-muted mb-1">{loc.city}</Card.Text>
                <Card.Text className="text-muted mb-1">
                  <strong>Phone:</strong> <a href={`tel:${loc.phone}`}>{loc.phone}</a>
                </Card.Text>
                <Card.Text className="text-muted mb-3">
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${loc.email}`} className="text-decoration-underline">
                    {loc.email}
                  </a>
                </Card.Text>
                <Button variant="success" className="px-4">
                  View map
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LocationsSection;
