import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import genericImg from "./generic.png";

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
  padding: 0.4rem 1rem 1rem;
  font-family: ${props => props.theme.fonts[0]};
`;

const EditBtn = styled.button`
  padding: 8px;
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
  
  const [name, setName] = useState("Random Name");
  const [isEditing, setIsEditing] = useState(false);

  const changeEditState = () => {
    setIsEditing(currentState => !currentState);
  };
  const changeName = e => {
    const { value } = e.target;
    setName(currentState => value);
  };

  const checkIfEnter = event => {
    if (event.key === "Enter") {
      changeEditState();
    }
  };

  return (
    <Container>
      <ProfileIcon src={genericImg} alt={"user profile"} />
      {!isEditing ? (
        <Name>{name}</Name>
      ) : (
        <TextField
          value={name}
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