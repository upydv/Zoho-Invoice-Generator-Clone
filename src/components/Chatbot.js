import React, { useState, useEffect } from 'react';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import { ChatDots, House, ArrowRight, Chat, X, Building, Send } from 'react-bootstrap-icons';

const styles = {
  chatbotContainer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
  },
  card: {
    width: '300px',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '70px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  cardBody: {
    padding: '20px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'linear-gradient(to bottom, #007bff, #ffffff)',
  },
  header: {
    width: '100%',
    position: 'relative',
    color: 'white',
    textAlign: 'center',
    marginBottom: '20px',
  },
  headerIcon: {
    position: 'absolute',
    top: '0',
    left: '0',
    color: 'white',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: '1.2em',
    marginTop: '30px',
  },
  button: {
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    border: '2px solid #007bff',
    color: '#007bff',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#f8f9fa',
    padding: '10px',
    width: '100%',
  },
  footerButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  chatButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '60px',
    height: '60px',
    zIndex: 1001,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    border: 'none',
  },
  chatAvatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
  },
  messageContainer: {
    flex: 1,
    overflowY: 'auto',
    width: '100%',
    padding: '10px',
  },
  message: {
    marginBottom: '10px',
    padding: '8px 12px',
    borderRadius: '15px',
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007bff',
    color: 'white',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f3f5',
    color: 'black',
  },
  titleDivider: {
    width: '100%',
    height: '1px',
    backgroundColor: 'white',
    margin: '10px 0',
  },
};

export default function ChatbotDesign() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [showChatDot, setShowChatDot] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    if (isOpen) {
      setIsOpen(false);
      setShowChatDot(false);
    } else {
      setIsOpen(true);
      setShowChatDot(true);
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleChatWithUsClick = () => {
    setActiveTab('conversation');
  };

  const handleNewConversationClick = () => {
    setActiveTab('chat');
    setMessages([{ text: "Hello! How can I assist you today?", sender: "bot" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Thank you for your message. Our team will get back to you soon.", sender: "bot" }]);
      }, 1000);
    }
  };

  return (
    <div style={styles.chatbotContainer}>
      {isOpen && (
        <Card style={styles.card}>
          <Card.Body style={styles.cardBody}>
            {activeTab === 'home' && (
              <>
                <div style={styles.header}>
                  <Building size={20} style={styles.headerIcon} />
                  <h5 style={styles.headerTitle}>Zoho Invoice Free Tools</h5>
                  <p>We are here to help you.</p>
                </div>
                <Button
                  variant="outline-primary"
                  style={styles.button}
                  onClick={handleChatWithUsClick}
                >
                  <ChatDots size={20} style={{ marginRight: '10px' }} /> Chat with us <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                </Button>
              </>
            )}

            {activeTab === 'conversation' && (
              <>
                <div style={styles.header}>
                  <h5>Chat with us</h5>
                  <div style={styles.titleDivider}></div>
                </div>
                <Button
                  variant="outline-primary"
                  style={styles.button}
                  onClick={handleNewConversationClick}
                >
                  <Chat size={20} style={{ marginRight: '10px' }} /> New Conversation
                </Button>
              </>
            )}

            {activeTab === 'chat' && (
              <>
                <div style={styles.header}>
                  <h5>Chat with us</h5>
                </div>
                <div style={styles.messageContainer}>
                  {messages.map((msg, index) => (
                    <div key={index} style={{
                      ...styles.message,
                      ...(msg.sender === 'user' ? styles.userMessage : styles.botMessage),
                      alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                    }}>
                      {msg.text}
                    </div>
                  ))}
                </div>
                <Form onSubmit={handleSubmit} style={{ width: '100%' }}>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type your message..."
                    />
                    <Button type="submit" variant="outline-primary">
                      <Send size={20} />
                    </Button>
                  </InputGroup>
                </Form>
              </>
            )}
          </Card.Body>

          {activeTab !== 'chat' && (
            <Card.Footer style={styles.footer}>
              <Button variant="link" onClick={() => handleTabClick('home')} style={styles.footerButton}>
                <House size={24} />
                <span>Home</span>
              </Button>
              <Button variant="link" onClick={() => handleTabClick('conversation')} style={styles.footerButton}>
                <ChatDots size={24} />
                <span>Conversation</span>
              </Button>
            </Card.Footer>
          )}
        </Card>
      )}

      {showChatDot && (
        <Button
          style={styles.chatButton}
          onClick={toggleChat}
        >
          {isOpen ? (
            <X size={30} color="white" />
          ) : (
            <div style={styles.chatAvatar}>🤖</div>
          )}
        </Button>
      )}
    </div>
  );
}