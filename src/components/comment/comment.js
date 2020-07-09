import React, { Fragment, useRef } from 'react';
import styled from 'styled-components';
import Input from '../input';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {ThemeButton} from '../../styles/';

import {useSelector,useDispatch} from 'react-redux';
import {addMessage,addMessageAsync} from '../../actions/messages';


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
    const textBoxRef = useRef(null);
    const userProfile = useSelector(state => state.userProfile);
    const dispatch = useDispatch();
    const saveMessage = (newMessage)=>{
        dispatch(addMessageAsync(newMessage));
    }
    
    const sendMessageBtn = (event)=>{
        console.log(event);
        console.log(textBoxRef.current.value);
        if(textBoxRef.current.value != "")
        {
            const payload = {
                image : userProfile.profileImage,
                name: userProfile.name,
                message: textBoxRef.current.value
            }
            saveMessage(payload);
        }
        textBoxRef.current.value = "";
    }

    const sendCheck = event => {
        if ((event.key === "Enter" || event.target.id === "sendBtn" ) && event.target.value != "") {
            const {value} = textBoxRef.current;
            const payload = {
            image : userProfile.profileImage,
            name: userProfile.name,
            message: value
            }
            saveMessage(payload);
            textBoxRef.current.value= "";
        }
      };
    return (
        <Fragment>
            <Container>
                <Input inputBoxRef={textBoxRef} checkIfEnter={sendCheck} profileImage={userProfile.profileImage}/>
                <ThemeButton round onClick={sendMessageBtn}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </ThemeButton>
            </Container>
        </Fragment>
    )
}

export default Comment;