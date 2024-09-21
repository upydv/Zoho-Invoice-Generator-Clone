import React, { useState } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'

const templates = [
  { name: "Contractor Invoice Template", image: "./invoice2.jpg" },
  { name: "Construction Invoice Template", image: "./invoice3.jpg" },
  { name: "Freelance Invoice Template", image: "./invoice4.png" },
  { name: "Consulting Invoice Template", image: "./invoice5.jpeg" },
  { name: "Proforma Invoice Template", image: "./invoice6.jpeg" },
  { name: "Sales Invoice Template", image: "./invoice7.png" },
  { name: "Service Invoice Template", image: "./invoice8.png" },
  { name: "Excel Invoice Template", image: "./invoice1.jpeg" },
  { name: "Word Invoice Template", image: "./invoice9.jpeg" },
  { name: "Copywriter Invoice Template", image: "./invoice10.jpeg" },
]

export default function TemplateCarousel() {
  const [startIndex, setStartIndex] = useState(0)

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex))
  }

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex < templates.length - 3 ? prevIndex + 1 : prevIndex))
  }

  return (
    <Card className="my-5" style={{ backgroundColor: '#e6f7ff' }}>
      <Card.Body>
        <h2 className="mb-4 text-center">Looking for <span style={{ color: '#007bff' }}>invoice templates?</span></h2>
        <div className="text-center mt-4">
          <p>If you're interested in exploring invoice templates for your other business needs, feel free to check out our collection.</p>
          <Button variant="danger">See all templates</Button>
        </div>
        <div className="position-relative my-5">
          <Row className="justify-content-center align-items-center">
            <Col xs="auto" className="p-0">
              <Button variant="link" onClick={handlePrev} disabled={startIndex === 0}>
                <ChevronLeft size={24} />
              </Button>
            </Col>
            {templates.slice(startIndex, startIndex + 3).map((template, index) => (
              <Col key={index} xs={12} md={3} className="text-center">
              <a 
                href={template.image} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="d-inline-block template-link"
                style={{ textDecoration: 'none' }}
              >
                <img 
                  src={template.image} 
                  alt={template.name} 
                  className="img-fluid mb-2 template-image" 
                  style={{
                    width: '200px',
                    height: '250px',
                    objectFit: 'cover',
                    transition: 'all 0.3s ease',
                  }}
                />
                <p className="small" style={{ color: 'black' ,fontWeight:'bold'}}>{template.name}</p> {/* Set text color to black */}
              </a>
            </Col>
            
            ))}
            <Col xs="auto" className="p-0">
              <Button variant="link" onClick={handleNext} disabled={startIndex >= templates.length - 3}>
                <ChevronRight size={24} />
              </Button>
            </Col>
          </Row>
        </div>
        
      
        <div className="text-center">
          <h3 className="mb-4"> <img src="https://www.zoho.com/invoice/images/invoice.png" alt="Zoho Invoice" className="powered-by-logo mx-2" /></h3>
          <h4 className="mb-4">Create, send and manage invoices online with Zoho Invoice</h4>
          <Row className="justify-content-center">
            <Col xs={12} md={10}>
              <hr className="w-100" />
              <p className="mb-4" style={{ color: '#00008B' }}>
                Custom templates | Online payments | Customer portal | Time tracking | Estimates | Mobile app
              </p>
              <hr className="w-100" />
            </Col>
          </Row>
          <Button variant="danger" size="lg" className="px-5 py-3">Get Started</Button>
        </div>
      </Card.Body>
      <style jsx>{`
        .template-link:hover .template-image {
          transform: scale(0.95);
          border: 2px solid #007bff;
        }
      `}</style>
    </Card>
  )
}

