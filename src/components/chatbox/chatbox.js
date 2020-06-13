import React from 'react';
import styled from 'styled-components';
import Comment from '../comment';
import Chat from '../chat';

const Container = styled.div`
background-color: ${props => props.theme.colors.backgroundColors.secondary};
display: flex;
flex-direction: column;
align-items: stretch;
justify-content: space-between;
height: 100%;
padding: 0px 15px 0px 15px;
`;

// This component is responsible for laying out chatbox (layout component)
function ChatBox (props)
{
    return(
            <Container>
                <Chat />
                <Comment/>
            </Container>
    )
}

export default ChatBox;