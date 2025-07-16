import React, { useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_0wpqx2n',       // ✅ Your EmailJS Service ID
      'template_nyk6q25',      // ✅ Your EmailJS Template ID
      form.current,
      'bwgzyfK3ODmI3v781'      // ✅ Your EmailJS Public Key
    )
    .then(
      (result) => {
        alert('✅ Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        console.error('❌ EmailJS Error:', error.text || error);
        alert('❌ Failed to send message. Please check console or EmailJS settings.');
      }
    );
  };

  return (
    <Container className="py-5">
      <Row className="align-items-center g-4">
        <Col md={7}>
          <p className="text-success fw-semibold">Contact Form</p>
          <h2 className="fw-bold display-6">Drop Us a Line</h2>
          <p className="text-muted">
            Your email address will not be published. Required fields are marked <span className="text-danger">*</span>
          </p>

          <Form ref={form} onSubmit={sendEmail}>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Control id='contbtn' name="name" type="text" placeholder="Your Name" required />
              </Col>
              <Col md={6}>
                <Form.Control id='contbtn' name="email" type="email" placeholder="Your Email" required />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Control  id='contbtn' name="phone" type="text" placeholder="Your Phone" />
              </Col>
              <Col md={6}>
                <Form.Control id='contbtn' name="subject" type="text" placeholder="Subject" required />
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Control id='contbtnm' name="message" as="textarea" rows={5} placeholder="Your Message" required />
            </Form.Group>
            <Button type="submit" className="px-5 py-2 fw-semibold" style={{ backgroundColor: '#1b2d3f', border: 'none' }}>
              Send Message
            </Button>
          </Form>
        </Col>

        <Col md={5} className="text-center">
          <img
            src="https://nest-frontend-v6.vercel.app/assets/imgs/page/contact-2.png"
            alt="Contact Us"
            className="img-fluid rounded-4"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
