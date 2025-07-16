import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HelpSection = () => {
  return (
    <Container className="my-5">
      <Row>
        {/* Left Section */}
        <Col md={6}>
          <p style={{ color: '#28a745', fontWeight: '500' }}>How can help you ?</p>
          <h2 style={{ fontWeight: '700', fontSize: '2.5rem', lineHeight: '1.2' }}>
            Let us know how <br /> we can help you
          </h2>
          <p className="text-muted mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </Col>

        {/* Right Section */}
        <Col md={6}>
          <Row>
            <Col sm={6} className="mb-4">
              <h6><strong>01. Visit Feedback</strong></h6>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </Col>

            <Col sm={6} className="mb-4">
              <h6><strong>02. Employer Services</strong></h6>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </Col>

            <Col sm={6} className="mb-4">
              <h6><strong style={{ color: '#28a745' }}>03. Billing Inquiries</strong></h6>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </Col>

            <Col sm={6} className="mb-4">
              <h6><strong>04. General Inquiries</strong></h6>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HelpSection;
