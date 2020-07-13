import React, {Fragment} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-areas:
    "leftbar    rightbar";
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 100px 5px;
    grid-column-gap: 13px;
    grid-row-gap: 7px;
    /* grid-gap: 40px; */
`;

const ImageContainer = styled.img`
    cursor: pointer;
    grid-area: leftbar;
    width: 100%;
    height: 100%;
`;

const ContentContainer = styled.div`
    cursor: pointer;
    grid-area: rightbar;
    display: flex;
    flex-direction: column;
`;

const H2 = styled.h2`
    font-size: ${props => props.theme.fontSizes.medium};
    margin-top: 3px;
    margin-bottom: 5px;

`;
const SubHead = styled.h5`
    font-size:  ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.colors.textColors.secondary};
    margin-bottom: ${props => props.theme.fontSizes.xsmall};
`;
function SearchResult({data})
{
    return <Fragment>
        <Container >
        <ImageContainer src={data.thumbnail} />
        <ContentContainer>
            <H2>{data.title}</H2>
<SubHead>{data.creator} * {data.uploadDate}</SubHead>
<SubHead>{data.description}</SubHead>
        </ContentContainer>
        </Container>
    </Fragment>
}

export default SearchResult;