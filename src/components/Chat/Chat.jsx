
import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
      const apiUrl = 'https://api.openai.com/v1/chat/completions'; 
      const apiKey = process.env.REACT_APP_OPENAI_API_KEY; 
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`, 
      };

      const requestBody = {
        model: 'gpt-4o-mini', 
        messages: [{ role: 'user', content: input }],
      };

      const { data } = await axios.post(apiUrl, requestBody, { headers });

      setResponse(data.choices[0].message.content);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default Chat;