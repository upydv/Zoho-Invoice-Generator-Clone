import React from 'react';
//import { Nav } from 'react-bootstrap';
import {  People, Cash, Box, FileEarmarkText, Facebook, Twitter } from 'react-bootstrap-icons';

export default function Sidebar({ isVisible, isExpanded }) {
  if (!isVisible) return null;

  return (
    <div className={`sidebar bg-dark text-white ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-header p-3 text-center">
        {/* Logo */}
        <img src={'./logo2.png'} alt="Logo" className="logo" />
        {/* Title is only visible when expanded */}
        {isExpanded && <span className="fw-bold title mt-1">Finance Free App</span>}
      </div>

      {/* Billing Section */}
      <div className="billing-section p-3">
        {isExpanded && (
          <>
            <h5>
              <People className="me-2" />
              Billing
            </h5>
            <div className="billing-items">
              <div className="billing-item">Create Invoices</div>
              <div className="billing-item">Generate Estimates</div>
              <div className="billing-item">Create Receipts</div>
              <div className="billing-item">Revenue Forecast</div>
            </div>
          </>
        )}
      </div>

      {/* Finance & Payroll Section */}
      <div className="finance-payroll-section p-3">
        {isExpanded && (
          <>
            <h5>
              <Cash className="me-2" />
              Finance & Payroll
            </h5>
            <div className="billing-items">
              <div className="billing-item">HMRC Furlough Claim Calculator</div>
              <div className="billing-item">Income Tax Calculator</div>
              <div className="billing-item">Paycheck Calculator</div>
            </div>
          </>
        )}
      </div>

      {/* Inventory Section */}
      <div className="inventory-section p-3">
        {isExpanded && (
          <>
            <h5>
              <Box className="me-2" />
              Inventory
            </h5>
            <div className="billing-items">
              <div className="billing-item">SKU Generator</div>
              <div className="billing-item">Purchase Order Generator</div>
              <div className="billing-item">Calculate Reorder Point</div>
              <div className="billing-item">Economic Order Quantity</div>
              <div className="billing-item">Break-even Point Calculator</div>
              <div className="billing-item">Inventory Turnover Ratio</div>
              <div className="billing-item">Packing Slip Generator</div>
              <div className="billing-item">BarCode Generator</div>
            </div>
          </>
        )}
      </div>

      {/* Expense Section */}
      <div className="expense-section p-3">
        {isExpanded && (
          <>
            <h5>
              <FileEarmarkText className="me-2" />
              Expense
            </h5>
            <div className="billing-items">
              <div className="billing-item">Generate Expense Reports</div>
            </div>
          </>
        )}
      </div>

      {/* Spread the Word Section */}
      <div className="spread-the-word text-center p-3">
        {isExpanded && (
          <>
            <div className="spread-text">Spread the word</div>
            <div className="social-icons">
              <Facebook className="me-2" />
              <Twitter />
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        .sidebar {
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          transition: all 0.3s ease;
          z-index: 1000;
          overflow-y: auto;
          box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
        }
        .sidebar.expanded {
          width: 250px;
        }
        .sidebar.collapsed {
          width: 60px;
        }
        .sidebar-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: auto;
          border-bottom: 1px solid transparent;
          margin-bottom: 10px; /* Reduced margin */
        }
        .logo {
          max-width: 100%;
          max-height: 80px;
          width: auto;
          height: auto;
        }
        .title {
          font-size: 1.2rem;
          margin-top: 5px;
        }
        .billing-section, .finance-payroll-section, .inventory-section, .expense-section {
          color: white;
          margin: 5px 0; /* Reduced margin for sections */
        }
        h5 {
          margin: 5px 0; /* Reduced margin for headings */
        }
        .billing-items {
          padding-left: 1rem; /* Indent for sub-items */
        }
        .billing-item {
          padding: 4px 0; /* Reduced padding */
          cursor: pointer;
          transition: background 0.3s;
        }
        .billing-item:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        .spread-the-word {
          margin-top: 10px; /* Reduced margin */
          color: white;
        }
        .spread-text {
          font-weight: bold;
          margin-bottom: 5px; /* Reduced margin */
        }
        .social-icons {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .social-icons .bi {
          font-size: 1.5rem; /* Adjust size as needed */
          margin: 0 5px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
