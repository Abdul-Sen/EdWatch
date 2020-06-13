import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    margin-top: 1rem;
    background-color: ${props => props.theme.colors.backgroundColors.third};
    border-radius: 10px;
`;

const ProfileImage = styled.img`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
`;
const RightContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
`;

const Name = styled.p`
    font-family: ${props => props.theme.fonts[0]};
    font-size: ${props => props.theme.fontSizes.xsmall};
    margin-top: 5px;
`;

const ChatMessage = styled.p`
    font-family: ${props => props.theme.fonts[1]};
    font-size: ${props => props.theme.fontSizes.medium};
    margin-top: 8px;
    margin-bottom: 8px;
    margin-right: 5px;
`;

function Message({name, message,image})
{
    return(
            <Container>
                <ProfileImage src={image} />
                <RightContainer>
                    <Name>{name}</Name>
                    <ChatMessage>{message}</ChatMessage>
                </RightContainer>
            </Container>
    )
}
export default Message;