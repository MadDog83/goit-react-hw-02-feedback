import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #4CAF50; 
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  border-style: none;
  transition: box-shadow 0.3s ease;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover, &:focus {
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
`;

const Feedback = ({ options, onLeaveFeedback }) => (
    <div>
      {options.map(option => (
        <StyledButton key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </StyledButton>
      ))}
    </div>
);

export default Feedback;