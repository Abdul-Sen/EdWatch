import React from "react";
import Profile from "./components/profile";
import Theme from "./components/theme";
import styled from "styled-components";
import ChatBox from './components/chatbox';
import Navbar from './components/navbar';
import Video from './components/video/';

const Container = styled.div`
  justify-content: space-around;
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

const MainContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  min-height: 100vh;
  background-color: lightblue;
`;

const LeftContainer = styled.div`
width: 60%;
@media (max-width: 768px) {
      width: 90%;
  }
`;

const RightContainer = styled.div`
width: 30%;
@media (max-width: 768px) {
      width: 90%;
  }
`;

const VideoStyled = styled(Video)`
  margin-top: 30px;
  margin-bottom: 30px;
`;
export default function App() {
  return (
    <Theme>
      <MainContainer>
        <Navbar></Navbar>
        <Container>
          <LeftContainer >  
            <VideoStyled youtubeId="lTRiuFIWV54" />
            <Profile />
          </LeftContainer>
          <RightContainer>
              <ChatBox />
          </RightContainer>
        </Container>
      </MainContainer>
    </Theme>
  );
} 