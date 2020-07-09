import React from 'react';
import styled from 'styled-components';

const UserImage = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
`;

const InputBox = styled.input`
    margin-left: 0.7rem;
    width: 100%;
    background-color: transparent;
    border: none;
`;

const Container = styled.div`
    display: flex;
    border-radius: 3px;
    padding: 1rem;
    width: 100%;
    background-color: ${props => props.theme.colors.backgroundColors.third};
    margin: 1rem;
`;

function Input(props) {

    return (
        <Container>
            <UserImage src={props.profileImage} />
            <InputBox ref={props.inputBoxRef} type="text" onKeyDown={props.checkIfEnter}></InputBox>
        </Container>
    );
}

export default Input;