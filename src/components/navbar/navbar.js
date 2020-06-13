import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    display: flex;
    width: 93%;
    justify-content:flex-start;
    padding: 15px 15px 15px 15px;
    
`;

const Button = styled.button`
    padding: 10px;
    margin: 7px;
    background-color:  ${props => props.theme.colors.iconColor.primary};
    font-size: ${props => props.theme.fontSizes.medium};
    border: none;
    border-radius: 5px;
`;

const Icon = styled.img`
    width: ${props => props.theme.fontSizes.xlarge};
    height: ${props => props.theme.fontSizes.xlarge};
`;

const AppName = styled.h3`
align-self: center;
font-size: ${props => props.theme.fontSizes.large};
font-family: ${props => props.theme.fonts[0]};
margin-left: 10px;
`;

const LeftContainer = styled.div`
    display: flex;
`;
function Navbar(props)
{
    return(
        <Container>
            <LeftContainer>
                <Icon src={process.env.PUBLIC_URL + 'logo.ico'} />
                <AppName>watchya</AppName>
            </LeftContainer>
            <div style={{marginLeft: "auto"}}>
                <Button>Invite <FontAwesomeIcon icon={faPlus} /></Button>
                <Button>Join <FontAwesomeIcon icon={faChevronRight} /></Button>
            </div>
        </Container>
    );
}
export default Navbar;