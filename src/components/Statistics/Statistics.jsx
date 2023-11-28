import styled from 'styled-components';

const CenteredText = styled.div`
  text-align: center;
`;

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <CenteredText>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {Math.round(positivePercentage)}%</p>
  </CenteredText>
);

export default Statistics;