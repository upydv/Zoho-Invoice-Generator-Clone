import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-light py-4 mt-auto">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} className="text-center">
            <p className="mb-3">
              <button onClick={scrollToTop} className="text-muted me-1 btn btn-link">Zoho Home</button>
              <button onClick={scrollToTop} className="text-muted me-1 btn btn-link">Contact</button>
              <button onClick={scrollToTop} className="text-muted me-1 btn btn-link">Security</button>
              <button onClick={scrollToTop} className="text-muted me-1 btn btn-link">IPR Complaints</button>
              <button onClick={scrollToTop} className="text-muted me-1 btn btn-link">Anti-spam Policy</button>
              <button onClick={scrollToTop} className="text-muted me-1 btn btn-link">Terms of Service</button>
              <button onClick={scrollToTop} className="text-muted me-1 btn btn-link">Privacy Policy</button>
              <button onClick={scrollToTop} className="text-muted me-1 btn btn-link">Cookie Policy</button>
              <button onClick={scrollToTop} className="text-muted me-1 btn btn-link">GDPR Compliance</button>
              <button onClick={scrollToTop} className="text-muted btn btn-link">Abuse Policy</button>
            </p>
            <p className="text-muted mb-0">© 2024, Zoho Corporation Pvt. Ltd. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
