import styled from 'styled-components';

const Notification = ({ message }) => (
  <CenteredText>{message}</CenteredText>
);

const CenteredText = styled.h2`
text-align: center;
`;

export default Notification;