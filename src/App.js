import React, { useEffect } from "react";
import Profile from "./components/profile";
import Theme from "./components/theme";
import styled from "styled-components";
import ChatBox from './components/chatbox';
import Navbar from './components/navbar';
import Player from './components/player';
import Search from './components/search';
import {startConnection} from './utils/signalR';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Container = styled.div`
  justify-content: space-around;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.backgroundColors.primary};
  display:flex;
  overflow-y:auto;
  margin-bottom: 50px;
  padding-bottom: 50px;
  padding-top: 50px;


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
  font-family: ${props => props.theme.fonts[0]};
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

export default function App() {
  
  useEffect(()=>{
    startConnection();
    return ()=>{
      console.log(`----------UNMOUNT APP-----------`);
      // TODO - Call closeConnectionGracefully(); from singlar
    }
  },[]);
  
  return (
    <Theme>
      <MainContainer>
        <Navbar></Navbar>
        <Container>
          <LeftContainer >              
            <Player />
            <Profile />
            <Search />
          </LeftContainer>
          <RightContainer>
              <ChatBox />
          </RightContainer>
        </Container>
      </MainContainer>
      <ToastContainer position="bottom-left" limit={3} />
    </Theme>
  );
} 