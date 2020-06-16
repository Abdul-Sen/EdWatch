import React, {useRef} from 'react';
import styled from 'styled-components';
import {useSelector,useDispatch} from 'react-redux';
import {addMessage} from '../../actions/messages';

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
    const inputBox = useRef(null);
    const userProfile = useSelector(state => state.userProfile);
    const dispatch = useDispatch();
    const saveMessage = (newMessage)=>{
        dispatch(addMessage(newMessage));
    }

    const checkIfEnter = event => {
        if (event.key === "Enter" && event.target.value != "") {
            const {value} = event.target;
            const payload = {
            image : userProfile.profileImage,
            name: userProfile.name,
            message: value
            }
            saveMessage(payload);
            inputBox.current.value= "";
        }
      };
    return (
        <Container>
            <UserImage src={userProfile.profileImage} />
            <InputBox ref={inputBox} type="text" onKeyDown={checkIfEnter}></InputBox>
        </Container>
    );
}

export default Input;