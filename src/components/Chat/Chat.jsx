import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  width: 300px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ResponseContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 400px;
  text-align: left;
`;

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
    <ChatContainer>
      <InputContainer>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={sendMessage}>Send</Button>
      </InputContainer>
      {response && (
        <ResponseContainer>
          {response}
        </ResponseContainer>
      )}
    </ChatContainer>
  );
};

export default Chat;
