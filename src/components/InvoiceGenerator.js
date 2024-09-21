import React, { useState, useRef, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import { Container, Row, Col, Form, Button, Card, Table, Image } from 'react-bootstrap';
import { Upload } from 'react-bootstrap-icons';
import './InvoiceStyles.css';  // Import custom CSS

export default function InvoiceGenerator() {
  const [columns, setColumns] = useState({
    description: 'Item Description',
    hsn: 'HSN',
    quantity: 'Quantity',
    rate: 'Rate',
    sgst: 'SGST %',
    cgst: 'CGST %',
    cess: 'Cess',
    amount: 'Amount',
  });

  const [invoiceData, setInvoiceData] = useState({
    title: 'Invoice Template',
    logo: '',
    companyName: '',
    gstin: '',
    address: '',
    city: '',
    state: '',
    country: 'India',
    clientName: '',
    clientGstin: '',
    clientAddress: '',
    clientCity: '',
    clientState: '',
    clientCountry: 'India',
    invoiceNumber: 'INV-12',
    date: 'Sep 20, 2024',
    dueDate: 'Sep 20, 2024',
    placeOfSupply: '',
    items: [{ description: '', hsn: '', quantity: 0, rate: 0, sgst: 0, cgst: 0, cess: 0, amount: 0 }],
    notes: 'It was great doing business with you.',
    terms: 'Please make the payment by the due date.',
  });

  const [selectedTheme, setSelectedTheme] = useState('standard');

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
    'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  const invoiceRef = useRef();
  const downloadCardRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const invoiceCard = invoiceRef.current;
      const downloadCard = downloadCardRef.current;
      
      if (invoiceCard && downloadCard) {
        const invoiceBottom = invoiceCard.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        const navbarHeight = 60; // Adjust this value based on your actual navbar height
        
        if (invoiceBottom <= windowHeight) {
          downloadCard.style.position = 'static';
        } else {
          downloadCard.style.position = 'fixed';
          downloadCard.style.top = `${navbarHeight + 20}px`; // Add 20px for some extra padding
          downloadCard.style.width = downloadCard.offsetWidth + 'px';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData({ ...invoiceData, [name]: value });
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...invoiceData.items];
    updatedItems[index][field] = value;
    setInvoiceData({ ...invoiceData, items: updatedItems });
  };

  const handleColumnChange = (field, value) => {
    setColumns({ ...columns, [field]: value });
  };

  const handleAddLineItem = () => {
    setInvoiceData({
      ...invoiceData,
      items: [...invoiceData.items, { description: '', hsn: '', quantity: 0, rate: 0, sgst: 0, cgst: 0, cess: 0, amount: 0 }],
    });
  };

  const handleDeleteRow = (index) => {
    const updatedItems = invoiceData.items.filter((_, i) => i !== index);
    setInvoiceData({ ...invoiceData, items: updatedItems });
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };

  const handleSaveOnline = () => {
    alert('Invoice saved online');
  };

  const handlePrintDownload = () => {
    const element = invoiceRef.current;
    const options = {
      margin: [8, 8],
      filename: 'invoice.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(element).set(options).save();
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInvoiceData({ ...invoiceData, logo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const calculateTotals = () => {
    let subTotal = 0;
    let sgstTotal = 0;
    let cgstTotal = 0;

    invoiceData.items.forEach(item => {
      const itemTotal = item.rate * item.quantity;
      subTotal += itemTotal;
      sgstTotal += (item.sgst / 100) * itemTotal;
      cgstTotal += (item.cgst / 100) * itemTotal;
    });

    return {
      subTotal,
      sgstTotal,
      cgstTotal,
      total: subTotal + sgstTotal + cgstTotal,
    };
  };

  const { subTotal, sgstTotal, cgstTotal, total } = calculateTotals();

  return (
    <Container fluid>
      <Row className="my-4 g-4">
        <Col lg={8}>
          <Card ref={invoiceRef} className="mb-4">
            <Card.Body>
              <Row className="mb-4">
                <Col xs={4}>
                  <div
                    className="logo-upload-container"
                    onClick={() => document.getElementById('logo-upload').click()}
                    style={{ cursor: 'pointer' }}
                  >
                    {invoiceData.logo ? (
                      <Image src={invoiceData.logo} alt="Company Logo" fluid style={{ height: '100px', objectFit: 'contain' }} />
                    ) : (
                      <div className="logo-placeholder">
                        <Upload size={40} />
                        <p>Upload Logo</p>
                      </div>
                    )}
                  </div>
                  <input
                    id="logo-upload"
                    type="file"
                    hidden
                    onChange={handleLogoUpload}
                    accept="image/*"
                  />
                </Col>
                <Col xs={8} className="text-end">
                  <Form.Control
                    type="text"
                    value={invoiceData.title}
                    onChange={(e) => setInvoiceData({ ...invoiceData, title: e.target.value })}
                    className="editable-title text-end"
                    style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '20px' }}
                  />
                </Col>
              </Row>

              <Form>
                <Row>
                  <Col md={6}>
                    <h5>Your Company Details</h5>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="companyName"
                        value={invoiceData.companyName}
                        onChange={handleInputChange}
                        placeholder="Your Company Name"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="gstin"
                        value={invoiceData.gstin}
                        onChange={handleInputChange}
                        placeholder="Company GSTIN"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="address"
                        value={invoiceData.address}
                        onChange={handleInputChange}
                        placeholder="Company Address"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="city"
                        value={invoiceData.city}
                        onChange={handleInputChange}
                        placeholder="City"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Select
                        name="state"
                        value={invoiceData.state}
                        onChange={handleInputChange}
                      >
                        <option value="">Select State</option>
                        {indianStates.map(state => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="country"
                        value={invoiceData.country}
                        onChange={handleInputChange}
                        placeholder="Country"
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <h5>Bill To</h5>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="clientName"
                        value={invoiceData.clientName}
                        onChange={handleInputChange}
                        placeholder="Your Client's Company"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="clientGstin"
                        value={invoiceData.clientGstin}
                        onChange={handleInputChange}
                        placeholder="Client's GSTIN"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="clientAddress"
                        value={invoiceData.clientAddress}
                        onChange={handleInputChange}
                        placeholder="Client's Address"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="clientCity"
                        value={invoiceData.clientCity}
                        onChange={handleInputChange}
                        placeholder="City"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Select
                        name="clientState"
                        value={invoiceData.clientState}
                        onChange={handleInputChange}
                      >
                        <option value="">Select State</option>
                        {indianStates.map(state => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="clientCountry"
                        value={invoiceData.clientCountry}
                        onChange={handleInputChange}
                        placeholder="Country"
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>Invoice#</Form.Label>
                      <Form.Control
                        type="text"
                        name="invoiceNumber"
                        value={invoiceData.invoiceNumber}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>Invoice Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="date"
                        value={invoiceData.date}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>Due Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="dueDate"
                        value={invoiceData.dueDate}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>Place Of Supply</Form.Label>
                      <Form.Select
                        name="placeOfSupply"
                        value={invoiceData.placeOfSupply}
                        onChange={handleInputChange}
                      >
                        <option value="">Select State</option>
                        {indianStates.map(state => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>

              <Table bordered hover className="compact-table mt-4">
                <thead style={{ backgroundColor: 'black', color: 'white' }}>
                  <tr>
                    {Object.entries(columns).map(([key, value]) => (
                      <th key={key}>
                        <Form.Control
                          type="text"
                          value={value}
                          onChange={(e) => handleColumnChange(key, e.target.value)}
                          placeholder="Column Name"
                          className="text-white"
                          style={{ backgroundColor: 'black' }}
                        />
                      </th>
                    ))}
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceData.items.map((item, index) => (
                    <tr key={index} className="invoice-row">
                      {Object.keys(columns).map((key) => (
                        <td key={key}>
                          <Form.Control
                            type={key === 'description' || key === 'hsn' ? 'text' : 'number'}
                            value={item[key]}
                            onChange={(e) => handleItemChange(index, key, e.target.value)}
                            placeholder={`Enter ${key}`}
                          />
                        </td>
                      ))}
                      <td className="delete-btn-cell">
                        <span className="delete-btn" onClick={() => handleDeleteRow(index)}>&times;</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <Button variant="link" onClick={handleAddLineItem}>
                + Add Line Item
              </Button>

              <hr />
              <Row className="mb-2">
                <Col className="text-end">Sub Total</Col>
                <Col className="text-end">{subTotal.toFixed(2)}</Col>
              </Row>
              <Row className="mb-2">
                <Col className="text-end">SGST Total</Col>
                <Col className="text-end">{sgstTotal.toFixed(2)}</Col>
              </Row>
              <Row className="mb-2">
                <Col className="text-end">CGST Total</Col>
                <Col className="text-end">{cgstTotal.toFixed(2)}</Col>
              </Row>
              <Row className="mb-2">
                <Col className="text-end fw-bold">TOTAL</Col>
                <Col className="text-end fw-bold">Rs. {total.toFixed(2)}</Col>
              </Row>
              <hr />
              <h4>Terms and Conditions</h4>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="terms"
                  value={invoiceData.terms}
                  onChange={handleInputChange}
                  placeholder="Add your terms and conditions here..."
                />
              </Form.Group>

              <h4>Notes</h4>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="notes"
                  value={invoiceData.notes}
                  onChange={handleInputChange}
                  placeholder="Add any additional notes here..."
                />
              </Form.Group>

              <div className="powered-by-footer mt-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', margin: 15 }}>
                <span className="me-2">Powered by</span>
                <img src="https://www.zoho.com/invoice/images/invoice.png" alt="Zoho Invoice" className="powered-by-logo mx-2" />
                <div>
                  <span className="ms-2">100% Free Invoicing Solution</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <div ref={downloadCardRef} style={{ position: 'fixed', top: '80px', width: '30%' }}>
            <Card>
              <Container>
                <h3 className="mb-4">Download Invoice</h3>
                <hr className="mb-4" />
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '15px' }}>
                  <h4 className="mb-0">Color Theme</h4>
                  <div className="d-flex justify-content-start">
                    <div className="bg-primary rounded-circle me-2" style={{ width: 20, height: 20 }}></div>
                    <div className="bg-secondary rounded-circle me-2" style={{ width: 20, height: 20 }}></div>
                    <div className="bg-success rounded-circle me-2" style={{ width: 20, height: 20 }}></div>
                    <div className="bg-danger rounded-circle me-2" style={{ width: 20, height: 20 }}></div>
                  </div>
                </div>
                <hr className="mb-4" />

                <div className="d-flex justify-content-around mb-4">
                  <Button variant={selectedTheme === 'standard' ? 'primary' : 'outline-primary'} onClick={() => handleThemeChange('standard')}>
                    Standard
                  </Button>
                  <Button variant={selectedTheme === 'spreadsheet' ? 'primary' : 'outline-primary'} onClick={() => handleThemeChange('spreadsheet')}>
                    Spreadsheet
                  </Button>
                  <Button variant={selectedTheme === 'compact' ? 'primary' : 'outline-primary'} onClick={() => handleThemeChange('compact')}>
                    Compact
                  </Button>
                </div>

                <hr className="mb-4" />

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '3px', marginBottom: '100px' }}>
                  <Button variant="primary" className="w-100 fw-bold" onClick={handleSaveOnline}>
                    Save Online
                  </Button>
                  <Button variant="outline-primary" className="w-100 fw-bold" onClick={handlePrintDownload}>
                    Print/Download
                  </Button>
                </div>
                <hr className='mb-4' />
                <div>
                  <h4>Install the mobile app.</h4>
                  <p>Generate your invoices and save them online.</p>
                </div>
              </Container>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}