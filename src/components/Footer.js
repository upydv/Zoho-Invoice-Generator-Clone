import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-light py-4 mt-auto">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} className="text-center">
            <p className="mb-3">
              <a href="javascript:void(0)" onClick={scrollToTop} className="text-muted me-3">Zoho Home</a>
              <a href="javascript:void(0)" onClick={scrollToTop} className="text-muted me-3">Contact</a>
              <a href="javascript:void(0)" onClick={scrollToTop} className="text-muted me-3">Security</a>
              <a href="javascript:void(0)" onClick={scrollToTop} className="text-muted me-3">IPR Complaints</a>
              <a href="javascript:void(0)" onClick={scrollToTop} className="text-muted me-3">Anti-spam Policy</a>
              <a href="javascript:void(0)" onClick={scrollToTop} className="text-muted me-3">Terms of Service</a>
              <a href="javascript:void(0)" onClick={scrollToTop} className="text-muted me-3">Privacy Policy</a>
              <a href="javascript:void(0)" onClick={scrollToTop} className="text-muted me-3">Cookie Policy</a>
              <a href="javascript:void(0)" onClick={scrollToTop} className="text-muted me-3">GDPR Compliance</a>
              <a href="javascript:void(0)" onClick={scrollToTop} className="text-muted">Abuse Policy</a>
            </p>
            <p className="text-muted mb-0">© 2024, Zoho Corporation Pvt. Ltd. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
