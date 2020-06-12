import React from "react";
import Profile from "./components/profile";
import Theme from "./components/theme";
import styled from "styled-components";
import Comment from './components/comment';
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.botticelli};
`;

const Heading = styled.h1`
  font-size: ${({ isHeading, theme: { fontSizes } }) =>
    isHeading ? fontSizes.large : fontSizes.small};
  color: ${({ theme: { colors } }) => colors.persianGreen};
`;

export default function App() {
  return (
    <Theme>
      <Container>
        <Profile />
      </Container>
    </Theme>
  );
}
