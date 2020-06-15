import React, {useState} from 'react';
import styled from 'styled-components';
import Message from '../message';
const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

// This component is responsible for displaying a history of chat messages
function Chat (props)
{
    const [messages] = useState([
        {
            image : (process.env.PUBLIC_URL + '/avatars/Artboards_Diversity_Avatars_by_Netguru-1.png'),
            name: 'drake',
            message: 'This is the viral video i was talking about :)'
        },
        {
            image : (process.env.PUBLIC_URL + '/avatars/Artboards_Diversity_Avatars_by_Netguru-2.png'),
            name: 'Random Name',
            message: 'oh this one'
        }
    ]);

    return(
            <Container>
                {messages.map((val,index)=> {
                return <Message name={val.name} message={val.message} image={val.image} key={index} />})}
            </Container>

    )
}

export default Chat;