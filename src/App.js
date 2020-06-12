import React from "react";
import Profile from "./components/profile";
import Theme from "./components/theme";
import styled from "styled-components";
import ChatBox from './components/chatbox';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.backgroundColors.primary};
  display:flex;
  overflow-y:auto;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default function App() {
  return (
    <Theme>
      <Container>
        <Profile style={{width: "50%"}}  />
        <div style={{width: "50%"}} >
          <ChatBox />
        </div>
      </Container>
    </Theme>
  );
}
