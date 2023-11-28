"use client"
import React, { useState, useEffect, useRef } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [messageStatus, setMessageStatus] = useState('');

  const socketRef = useRef(null);
  useEffect(() => {
    socketRef.current = new WebSocket('ws://localhost:8000');
    socketRef.current.addEventListener('message', (event: { data: string; }) => {
      const incomingMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, incomingMessage]);
    });
    return () => {
      socketRef.current.close();
    };
  }, []);
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const message = {
      text: newMessage,
      isSentByUser: true,
      status: 'sending', 
    };
    socketRef.current.send(JSON.stringify(message));
    setTimeout(() => {
      message.status = 'delivered'; 
      setMessageStatus('delivered');
      setMessages((prevMessages) => [...prevMessages, message]);
      setNewMessage('');
    }, 1000);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-800 text-black">
      <div style={{ backgroundColor: 'white', width: '100%', height: '100%', padding: '20px', overflowY: 'auto' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: '10px', textAlign: message.isSentByUser ? 'right' : 'left' }}>
            <span
              style={{
                backgroundColor: 'green',
                padding: '10px',
                borderRadius: '10px',
                border: 'solid 1px yellow', 
                color: 'black', 
                display: 'inline-block',
                position: 'relative',
              }}
            >
              {message.text}
              <span className={`message-status ${message.status === 'delivered' ? 'delivered' : 'sending'}`}>
                {message.status === 'delivered' ? '✔️' : '🕒'}
              </span>
            </span>
          </div>
        ))}
        <div style={{ display: 'flex', marginTop: '20px', marginLeft: '40px', marginRight: '40px' }}>
          <input
            type="text"
            style={{ flex: 1, marginRight: '10px', padding: '10px', borderRadius: '10px', border: 'solid 1px black' }}
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            onClick={handleSendMessage}
            style={{ backgroundColor: 'green', color: 'black', padding: '10px', borderRadius: '10px', border: 'solid 1px black' }}
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;

