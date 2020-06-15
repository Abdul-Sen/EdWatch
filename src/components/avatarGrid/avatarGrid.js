import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    height: 100%;
    overflow: auto;
`;

const Circle = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 1px solid #cfcfcf;
  margin: 7px;
`;

const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  transition: all .2s ease-in-out;
  &:hover{
    transform: scale(1.5);
  }
`;

// this component displays all available avatars in a grid
function AvatarGrid(props) {

    let images = [];

    for (let i = 1; i <= 59; i++) {
        images.push(process.env.PUBLIC_URL + `/avatars/Artboards_Diversity_Avatars_by_Netguru-${i}.png`);
    }
    
    return (
        <Container>
            {images.map((val, ind) => {
                return (
                    <Circle key={ind}>
                        <Avatar src={val} />
                    </Circle>
                )
            })}
        </Container>
    )
}

export default AvatarGrid;