import styled from 'styled-components';

const CenteredText = styled.h2`
  text-align: center;
`;

const Section = ({ title, children }) => (
  <div>
    <CenteredText>{title}</CenteredText>
    {children}
  </div>
);
  export default Section;