import React, { Fragment } from 'react';
import styled from 'styled-components';

const Trademark = styled.p`
    font-size: ${props => props.theme.fontSizes.xsmall};
    padding-top: ${props => props.theme.fontSizes.xsmall};
`
const Container = styled.div`
    padding: 1rem 1rem 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
`;

const External = styled.a`
   text-decoration-line: none;
   color: #484848;
   align-self: center;
`;
function Footer(props) {
    return (
        <Fragment>
            <Container>
                <External  href={"https://abdul-sen.github.io/portfolio"}>Discover more 🚀</External>
            <Trademark>EdWatch by Abdul, &#169; 2020.</Trademark>
            </Container>
        </Fragment>
    )
}

export default Footer;