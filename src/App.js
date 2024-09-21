import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import InvoiceGenerator from './components/InvoiceGenerator';
import TemplateCarousel from './components/TemplateCarousel';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import './App.css';

export default function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  // Toggle Sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(prev => !prev); // Toggle visibility
    setIsSidebarExpanded(true); // Keep it expanded when opened
  };

  return (
    <div className="d-flex">
      {/* Sidebar Component */}
      <Sidebar 
        isVisible={isSidebarVisible} 
        isExpanded={isSidebarExpanded} 
      />

      {/* Main Content Area */}
      <div className={`main-content ${isSidebarVisible ? (isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed') : ''}`}>
        <Navbar toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} /> {/* Pass sidebar visibility */}

        <Container fluid className="py-5">
          {/* Main Sections */}
          <InvoiceGenerator />
          <TemplateCarousel />
          <FAQ />
        </Container>

        <Footer />
        <Chatbot />
      </div>

      {/* Inline Styles for Dynamic Layout */}
      <style jsx>{`
        .main-content {
          flex-grow: 1;
          transition: all 0.3s ease-in-out;
        }
        /* Sidebar expanded shifts main content */
        .main-content.sidebar-expanded {
          margin-left: 250px;
        }
        /* Sidebar collapsed shifts main content less */
        .main-content.sidebar-collapsed {
          margin-left: 60px;
        }
        /* No margin when sidebar is hidden */
        .main-content:not(.sidebar-expanded):not(.sidebar-collapsed) {
          margin-left: 0;
        }
      `}</style>
    </div>
  );
}
