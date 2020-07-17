import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { getGroupId, joinGroup } from '../../api/signalR';
import Modal from '../modal';
import { toast } from 'react-toastify';
import {copyText} from '../../utils';

const Container = styled.div`
    display: flex;
    width: 93%;
    justify-content:flex-start;
    padding: 15px 15px 15px 15px;
    
`;

const Heading = styled.h3`
    font-size: ${ props => props.theme.fontSizes.large};
    margin-bottom: 1rem;
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
font-weight: lighter;
`;

const LeftContainer = styled.div`
    display: flex;
`;

const Input = styled.input`
    border-radius: 5px;
    padding: 0.5rem;
    font-size: 1rem;
    margin: 1rem 1rem 1rem 0rem;
    width: 90%;
`;

function Navbar(props) {
    const joinRef = useRef(null);

    
    const [showJoinModal, setShowJoinModal] = useState(false);
    // User is always part of the group, otherwise use a DB to store user context

    const handleInvite = () => {

        let sessionID = getGroupId();
        copyText(sessionID);
        toast("Your session ID has been copied");
        
    }

    const handleJoin = () => {
        setShowJoinModal((current) => !current);
        // Todo - open modal that asks user to input groupID/group name
    }

    const joinTheRoom = ()=>{
        console.log(joinRef.current.value);
        joinGroup(joinRef.current.value);
        handleJoin();
    }

    return (
        <Container>
            {showJoinModal &&
                <Modal closeHandler={handleJoin}>
                    <Heading>Join</Heading>
                    <p>Join by entering the foreign ID:</p>
                    <Input ref={joinRef} type="text" ></Input>
                    <button onClick={joinTheRoom}>Join</button>
                </Modal>
            }

            <LeftContainer>
                <Icon src={process.env.PUBLIC_URL + '/logo.ico'} />
                <AppName><span style={{fontWeight: "bold"}}>Ed</span>Watch</AppName>
            </LeftContainer>
            <div style={{ marginLeft: "auto" }}>
                <Button onClick={handleInvite}>Invite <FontAwesomeIcon icon={faPlus} /></Button>
                <Button onClick={handleJoin} >Join <FontAwesomeIcon icon={faChevronRight} /></Button>
            </div>
        </Container>
    );
}
export default Navbar;