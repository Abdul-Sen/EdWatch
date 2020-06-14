import React, { Fragment } from 'react';
import styled from 'styled-components';
import Input from '../input';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {ThemeButton} from '../../styles/';

const Container = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 90%;
    padding: 0.5rem 1rem 0.5rem 1rem;
`;

// This function adds a new comment to the chat
function Comment(props)
{
    return (
        <Fragment>
            <Container>
                <Input />
                <ThemeButton round>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </ThemeButton>
            </Container>
        </Fragment>
    )
}

export default Comment;