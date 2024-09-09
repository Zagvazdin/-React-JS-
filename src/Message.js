import React from 'react';
import './Message.css'; // Импортируем стили

const Message = ({ text }) => {
    return (
        <div className="message">
            {text}
        </div>
    );
};

export default Message;
