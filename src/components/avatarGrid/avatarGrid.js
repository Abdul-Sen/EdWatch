import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeProfileImage } from '../../actions/userProfile';
import {Avatar, Circle} from '../../styles';

const Container = styled.div`
    padding-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    height: 100%;
    overflow: auto;
`;

// this component displays all available avatars in a grid
function AvatarGrid({ closeHandler }) {
    const dispatch = useDispatch();
    let images = [];

    for (let i = 1; i <= 59; i++) {
        images.push(process.env.PUBLIC_URL + `/avatars/Artboards_Diversity_Avatars_by_Netguru-${i}.png`);
    }

    const selectAvatar = (e) => {
        dispatch(changeProfileImage(e.target.src));
        closeHandler();
    }

    return (
        <Container>
            {images.map((val, ind) => {
                return (
                    <Circle key={ind}>
                        <Avatar src={val} onClick={selectAvatar} />
                    </Circle>
                )
            })}
        </Container>
    )
}

export default AvatarGrid;