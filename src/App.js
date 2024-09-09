// src/App.js
import React from 'react';
import Message from './Message';

function App() {
    return (
        <div className="App">
            <h1>Привет, как дела?</h1>
            <Message text="Это первый компонент!" />
            <Message text="React - это !" />
        </div>
    );
}

export default App;
