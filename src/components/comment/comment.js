import React, { Fragment } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: grey;
    padding: 1rem;
`;

function Comment(props)
{
    return (
        <Fragment>
            <Container>
                <p>Comment</p>
            </Container>
        </Fragment>
    )
}

export default Comment;