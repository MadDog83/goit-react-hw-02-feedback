import styled from 'styled-components';

const CenteredText = styled.p`
  text-align: center;
`;

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div>
      <CenteredText>Good: {good}</CenteredText>
      <CenteredText>Neutral: {neutral}</CenteredText>
      <CenteredText>Bad: {bad}</CenteredText>
      <CenteredText>Total: {total}</CenteredText>
      <CenteredText>Positive feedback: {Math.round(positivePercentage)}%</CenteredText>
    </div>
);

export default Statistics;