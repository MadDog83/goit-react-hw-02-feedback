import React, { Component } from 'react';
/* import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification'; */
import Chat from './Chat/Chat';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedback = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1
    }));
  };

  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => (this.state.good / this.countTotalFeedback()) * 100;

  render() {
    const centerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '20px',
    };

    return (
      <div style={centerStyle}>
        <h1>Employment Assistant</h1>
        <Chat />
      </div>
    );
  }
}

export default App;