import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const faqs = [
  {
    question: 'What is a GST invoice?',
    answer: 'A GST invoice is a tax document issued by a registered dealer to a buyer when selling goods or services. It contains details about the transaction, including the GST charged.'
  },
  {
    question: 'What is a bill of supply?',
    answer: 'A bill of supply is a document that is used to record the sale of goods or services. It is used to record the details of the transaction, including the GST charged.'
  },
  {
    question: 'How do I generate a GST invoice?',
    answer: 'You can generate a GST invoice using our free online tool. Simply fill in the required details, choose a template, and download or print your invoice.'
  },
  {
    question: 'Is this GST invoice generator free to use?',
    answer: 'Yes, our GST invoice generator is completely free to use. You can create and download as many invoices as you need without any cost.'
  },
  {
    question: 'What information do I need to include in a GST invoice?',
    answer: 'A GST invoice should include your business details, customer information, invoice number, date of issue, description of goods or services, HSN/SAC code, quantity, rate, total amount, and GST breakdown (CGST, SGST, IGST).'
  },
  {
    question: 'Can I customize the invoice template?',
    answer: 'Yes, our invoice generator offers multiple themes and customization options. You can choose from standard, spreadsheet, or compact layouts, and select different color schemes to match your brand.'
  },
  {
    question: 'What is a tax invoice?',
    answer: 'A tax invoice is the invoice created by a GST registered business owner when he sells taxable goods and services. Tax invoices are mandatory for claiming Input Tax Credit.'
  },
  {
    question: 'What is a GSTIN and how can I get one?',
    answer: 'GSTIN is a unique 15 digit identification number given to a taxpayer who registers themselves under the GST law in a particular state in India. Check out more details in this <a href="https://www.zoho.com/in/books/gst/how-to-register-for-gst.html" target="_blank" rel="noopener noreferrer">link</a>.'
  },
  {
    question: 'How are interstate and intrastate transactions treated under the GST?',
    answer: 'In case of intrastate transactions, two taxes; Central GST(CGST) and State GST(SGST) are collected by both Central and State Government. If it is an interstate transaction, a combined tax called Integrated GST (IGST) is collected by the Central Government.'
  },
  {
    question: 'What is the time limit to issue invoices in the GST system?',
    answer: 'For services, the tax invoice must be issued within 30 days from the date of the service rendered. For goods, the invoice must be issued before or at the time of removal of goods or on or before the delivery of goods.'
  },
  {
    question: 'How many copies of invoices are required under the GST?',
    answer: 'If you are selling goods, you need to produce 3 copies (one for your customer, one for the transporter, and one for your own records). If you are providing a service, you need to produce 2 copies (one for your customer and one for your records).'
  },
  {
    question: 'What is HSN Code, and SAC?',
    answer: 'The Harmonized System of Nomenclature (HSN) is an internationally accepted method of naming, classifying and identifying products. HSN code is used to classify goods to compute GST. Service Accounting Codes (SAC) is a unique code provided for recognition, measurement, and taxation of services.'
  },
  {
    question: 'What is the place of supply under the GST?',
    answer: 'Place of supply under the GST is the location of the buyer or receiver of the goods or services. Check out more details on <a href="https://www.zoho.com/in/books/gst/what-is-place-of-supply-under-gst.html" target="_blank" rel="noopener noreferrer">supply under the GST</a>.'
  },
  {
    question: 'What is reverse charge?',
    answer: 'In the reverse charge mechanism, the buyer or the receiver of goods or services is liable to pay taxes instead of the seller. Click <a href="https://www.zoho.com/in/books/gst/reverse-charge-mechanism-gst.html" target="_blank" rel="noopener noreferrer">here</a> to learn more about reverse charge.'
  },
  {
    question: 'What is mixed and composite supply?',
    answer: 'Mixed supply under GST is when a taxable person combines two or more individual goods or services and sells them for a single price. Composite supply means if a supply comprises two or more goods or services that are naturally bundled and sold together.'
  }
];

export default function FAQ() {
  return (
    <Container className="my-5" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
      <h2 className="mb-4" style={{ fontSize: '2rem' }}>Frequently Asked Questions</h2>
      <Accordion>
        {faqs.map((faq, index) => (
          <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
            <Accordion.Header style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{faq.question}</Accordion.Header>
            <Accordion.Body style={{ fontSize: '1rem', fontWeight: 'normal' }}>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <style jsx>{`
        :global(.accordion) {
          --bs-accordion-border-width: 0;
        }
        :global(.accordion-item) {
          border: none;
          border-bottom: 1px solid #000;
        }
        :global(.accordion-item:last-child) {
          border-bottom: none;
        }
        :global(.accordion-button) {
          background-color: transparent !important;
          box-shadow: none !important;
          padding-left: 0;
          padding-right: 0;
        }
        :global(.accordion-button:not(.collapsed)) {
          color: inherit;
        }
        :global(.accordion-button:focus) {
          border-color: transparent;
        }
        :global(.accordion-button::after) {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
        }
        :global(.accordion-button:not(.collapsed)::after) {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
        }
        :global(.accordion-body) {
          padding-left: 0;
          padding-right: 0;
        }
      `}</style>
    </Container>
  );
}
