import React, { useState, useEffect } from 'react';
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
  white-space: pre-wrap; /* Сохраняет пробелы и переносы строк */
`;

const Chat = () => {
  const [input, setInput] = useState('');
  const [displayedResponse, setDisplayedResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const sendWelcomeMessage = async () => {
      setLoading(true);
      setError('');
      try {
        const apiUrl = 'https://api.openai.com/v1/chat/completions';
        const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        };

        const requestBody = {
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: 'You are an assistant that helps foreigners with legalization in Poland. Answer questions related to visas, residence permits, and other legal matters for foreigners in Poland.' },
            { role: 'user', content: 'Здравствуйте! Как я могу вам помочь с вопросами о визах, разрешениях на проживание или другими юридическими вопросами в Польше? Пожалуйста, уточните, что вас интересует.' }
          ],
        };

        const { data } = await axios.post(apiUrl, requestBody, { headers });

        setDisplayedResponse(data.choices[0].message.content); // Отображаем сообщение сразу
      } catch (error) {
        console.error('Error sending welcome message:', error);
        setError('Ошибка при отправке приветственного сообщения.');
      } finally {
        setLoading(false);
      }
    };

    sendWelcomeMessage();
  }, []);

  const sendMessage = async () => {
    setLoading(true);
    setError('');
    try {
      const apiUrl = 'https://api.openai.com/v1/chat/completions';
      const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      };

      const requestBody = {
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You are an assistant that helps foreigners with legalization in Poland. Answer questions related to visas, residence permits, and other legal matters for foreigners in Poland.' },
          { role: 'user', content: input }
        ],
      };

      const { data } = await axios.post(apiUrl, requestBody, { headers });

      setDisplayedResponse(data.choices[0].message.content); // Отображаем сообщение сразу
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Ошибка при отправке сообщения.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ChatContainer>
      <InputContainer>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введите ваш вопрос о легализации"
        />
        <Button onClick={sendMessage} disabled={loading}>Отправить</Button>
      </InputContainer>
      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {displayedResponse && (
        <ResponseContainer>
          {displayedResponse}
        </ResponseContainer>
      )}
    </ChatContainer>
  );
};

export default Chat;
