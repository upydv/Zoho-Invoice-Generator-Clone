import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Button } from 'react-bootstrap';
import { List } from 'react-bootstrap-icons';
import './Navbar.css'; // Assuming you have this CSS file for custom styles

export default function Navbar({ toggleSidebar, isSidebarVisible }) {
  return (
    <BootstrapNavbar bg="light" expand="lg" fixed="top" className="px-3 navbar-container">
      <div className="d-flex align-items-center">
        {/* Logo and Toggle Button together */}
        <div className="d-flex align-items-center me-2">
          <Button variant="link" onClick={toggleSidebar} className="p-0 me-2">
            <List size={24} />
          </Button>
          {!isSidebarVisible && (  // Only show the logo when sidebar is not visible
            <img src="./logo.jpeg" alt="Logo" className="navbar-logo" />
          )}
        </div>

        {/* Vertical Divider */}
        <div className="navbar-divider"></div>

        {/* Navbar Title and Subheading */}
        <div className="ms-3">
          <div className="navbar-title">Free GST Invoice Generator</div>
          <div className="navbar-subtitle">by Zoho Invoice</div>
        </div>
      </div>

      <Nav className="ms-auto d-flex align-items-center">
        {/* "Check out Zoho Invoices" on the rightmost side */}
        <span className="navbar-zoho ms-auto me-3" onClick={() => window.location.href = './TemplateCarousel.js'}>
          Check out Zoho Invoices
        </span>
        <Button variant="danger" className="ms-2">Sign Up. It's Free</Button>
      </Nav>
    </BootstrapNavbar>
  );
}
