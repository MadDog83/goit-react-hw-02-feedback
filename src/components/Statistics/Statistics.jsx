const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {Math.round(positivePercentage)}%</p>
    </div>
  );
  
  export default Statistics;