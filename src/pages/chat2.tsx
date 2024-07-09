import React from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { Settings, Phone, SentimentSatisfiedAlt, AttachFile, Send } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const styles = {
  sidebar: {
    backgroundColor: '#f8f9fa', // Light grey-blue background
    borderRight: '1px solid #e0e5ec',
  },
  conversationItem: {
    borderBottom: '1px solid #e0e5ec',
    transition: 'background-color 0.2s',
    cursor: 'pointer',
  },
  conversationItemHover: {
    backgroundColor: '#e9ecef', // Slightly darker on hover
  },
  chatHeader: {
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #e0e5ec',
  },
  messageReceived: {
    backgroundColor: '#e9ecef', // Light grey-blue
    color: '#212529', // Dark grey, almost black
  },
  messageSent: {
    backgroundColor: '#4a90e2', // Bright blue
    color: 'white',
  },
  inputArea: {
    backgroundColor: '#f8f9fa',
    borderTop: '1px solid #e0e5ec',
  },
};

const ChatInterface = () => {
  const conversations = [
    { name: 'John Doe', message: "Hey, how's it going?", time: '10:30 AM' },
    // Add more conversations...
  ];

  const messages = [
    { sender: 'received', content: "Hi, how's your day shaping up?", time: '8:30 AM' },
    { sender: 'sent', content: "It's been quite hectic, deadlines looming. Just finished a long meeting.", time: '8:35 AM' },
    // Add more messages...
  ];

    // const [lang, setLang] = useState("fr")
  

  return (
    <Container fluid className="vh-100 p-0">
      <Row className="h-100 g-0">
        <Col md={4} style={styles.sidebar}>
          <InputGroup className="p-2">
            <Form.Control placeholder="Search" className="rounded-pill border-0 bg-white" />
          </InputGroup>
          <div className="overflow-auto" style={{height: 'calc(100vh - 56px)'}}>
            {conversations.map((conv, index) => (
              <div key={index} className="d-flex align-items-center p-2" style={styles.conversationItem}>
                <div className="rounded-circle bg-secondary me-2" style={{width: 40, height: 40}}></div>
                <div className="flex-grow-1">
                  <div className="fw-bold text-dark">{conv.name}</div>
                  <div className="text-muted small">{conv.message}</div>
                </div>
                <small className="text-muted">{conv.time}</small>
              </div>
            ))}
          </div>
        </Col>
        <Col md={8} className="d-flex flex-column bg-white">
          <div className="p-2 d-flex align-items-center" style={styles.chatHeader}>
            <div className="rounded-circle bg-secondary me-2" style={{width: 40, height: 40}}></div>
            <div className="flex-grow-1">
              <div className="fw-bold text-dark">Jane Smith</div>
              <div className="text-muted small">Last seen today at 11:15 AM</div>
            </div>
            <IconButton size="small"><Settings /></IconButton>
            
            <IconButton size="small"><Phone /></IconButton>
          </div>
          <div className="flex-grow-1 p-2 overflow-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`d-flex flex-column ${msg.sender === 'sent' ? 'align-items-end' : 'align-items-start'} mb-2`}>
                <div className="rounded p-2" style={msg.sender === 'sent' ? styles.messageSent : styles.messageReceived}>
                  {msg.content}
                </div>
                <small className="text-muted mt-1">{msg.time}</small>
              </div>
            ))}
          </div>
          <div className="p-2" style={styles.inputArea}>
            <InputGroup>
              <Form.Control placeholder="Type a message..." className="border-0 bg-white" />
              <IconButton size="small"><SentimentSatisfiedAlt /></IconButton>
              <IconButton size="small"><AttachFile /></IconButton>
              <IconButton size="small"><Send /></IconButton>
            </InputGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatInterface;