import React, { Fragment } from 'react';
import styled from 'styled-components';
import Input from '../input';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";


const Container = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 90%;
    padding: 0.5rem 1rem 0.5rem 1rem;
`;

const InputButton = styled.button`
    background-color: ${props => props.theme.colors.iconColor.primary};
    border-radius: 50%;
    padding: 0.8rem;
    border: none;
    outline: none;
    &:active {
        background-color: ${props => props.theme.colors.iconColor.activePrimary};
    }
`;

// This function adds a new comment to the chat
function Comment(props)
{
    return (
        <Fragment>
            <Container>
                <Input />
                <InputButton >
                    <FontAwesomeIcon icon={faPaperPlane} />
                </InputButton>
            </Container>
        </Fragment>
    )
}

export default Comment;