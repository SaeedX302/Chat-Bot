import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        setMessages([...messages, { text: input, sender: 'user' }]);
        setInput('');
        setTimeout(() => {
            setMessages([...messages, { text: input, sender: 'user' }, { text: 'Bot Reply', sender: 'bot' }]);
        }, 1000);
    };

    return (
        <div className="chat-container">
            <div className="chat-header">ChatBot</div>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.sender === 'user' ? 'user-message' : 'bot-message'}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

const ReactChatBot = (container) => ReactDOM.render(<ChatBot />, container);

export default ReactChatBot;
