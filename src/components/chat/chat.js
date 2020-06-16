import React, {useState} from 'react';
import styled from 'styled-components';
import Message from '../message';
import {useSelector} from 'react-redux';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 80vh;
    overflow: auto;
`;

// This component is responsible for displaying a history of chat messages
function Chat (props)
{
    const messages = useSelector(gstate => gstate.messages);
    return(
            <Container>
                {messages.map((val,index)=> {
                return <Message name={val.name} message={val.message} image={val.image} key={index} />})}
            </Container>
    )
}

export default Chat;