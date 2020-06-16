import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import Modal from '../modal';
import AvatarGrid from '../avatarGrid';
import { useSelector, useDispatch } from 'react-redux';
import { changeName as CN } from '../../actions/userProfile';
import {Avatar, Circle} from '../../styles';

const Container = styled.div`
  align-items: flex-start;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Name = styled.h3`
  font-size: ${ props => props.theme.fontSizes.medium};
  padding: 0.4rem 0.3rem 0.3rem;
  font-family: ${props => props.theme.fonts[0]};
`;

const EditBtn = styled.button`
  padding:8px;
  background: transparent;
  border: none;
  &:active {
    background: grey;
  }
  &:focus {
    outline: none;
  }
`;

const FaIcon = styled(FontAwesomeIcon)``;

const ProfileIcon = styled.img`
  width: ${props => props.theme.fontSizes.xlarge};
  height: ${props => props.theme.fontSizes.xlarge};
  border-radius: 50%;
`;

const TextField = styled.input`
  padding: 0.5rem;
  margin: 0rem 0rem 0rem 1rem;
  border-radius: 3px;

  @media (max-width: 768px) {
    margin: 1rem 0rem 1rem 0rem;
  }
`;

function Profile(props) {
  const dispatch = new useDispatch();
  const userProfile = useSelector(state => state.userProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const reverseModalState = () => {
    setShowModal((currentState) => !currentState);
  }

  const changeEditState = () => {
    setIsEditing(currentState => !currentState);
  };
  const changeName = e => {
    const { value } = e.target;
    dispatch(CN(value));
  };

  /**
   * 
   * @param {event} event checks if user pressed enter, and (TODO: calls the callback function)
   */
  const checkIfEnter = event => {
    if (event.key === "Enter") {
      changeEditState();
    }
  };

  return (
    <Container>
      {showModal && <Modal closeHandler={reverseModalState}>
        <AvatarGrid closeHandler={reverseModalState} />
      </Modal>}
      <Circle>
        <Avatar src={userProfile.profileImage} onClick={reverseModalState} alt={"user profile"} />
      </Circle>
      {!isEditing ? (
        <Name>{userProfile.name}</Name>
      ) : (
          <TextField
            value={userProfile.name}
            onChange={changeName}
            onKeyDown={checkIfEnter}
          />
        )}
      <EditBtn onClick={changeEditState}>
        <FaIcon icon={faPencilAlt} />
      </EditBtn>
    </Container>
  );
}

export default Profile;