import React, { Fragment } from 'react';
import styled from 'styled-components';
import { getIsHost } from '../../api/signalR';
import { useDispatch } from 'react-redux';
import { updateVideoStateAsync } from '../../actions/videoState';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faCheck } from "@fortawesome/free-solid-svg-icons";
import { copyText } from '../../utils';
const Container = styled.div`
    display: grid;
    grid-template-areas:
    "leftbar    rightbar";
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 100px 5px;
    grid-column-gap: 13px;
    grid-row-gap: 1rem;
    &:active {
        background-color: ${props => props.theme.colors.iconColor.activePrimary};
    }
    @media (max-width: 500px) {
      grid-row-gap: 2rem;
  }
`;

const ImageContainer = styled.img`
 cursor: pointer;
    grid-area: leftbar;
    display: block;
  max-width:230px;
  max-height:95px;
  width: auto;
  height: auto;
  justify-self: end;
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
    overflow-wrap: anywhere;
    font-size:  ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.colors.textColors.secondary};
    margin-bottom: ${props => props.theme.fontSizes.xsmall};
`;
function SearchResult({ data }) {

    const dispatch = useDispatch();

    const IconWrap = ({ userIcon, children }) => <Fragment><FontAwesomeIcon icon={userIcon}> </FontAwesomeIcon> {children}</Fragment>;

    const handleVideoSelect = () => {
        console.log(`video URL is... ${data.video_url}`);
        if (getIsHost()) {
            // Play selected video
            console.log(`user is host, playing new video`);
            dispatch(updateVideoStateAsync({ url: data.video_url }));
            toast(<IconWrap userIcon={faCheck}>Video loaded for all users</IconWrap>, { delay: 1000 });
        }
        else {
            console.log(`user is not host, copying video to clipboard`);
            let message = `Please play ${data.video_url}`;
            copyText(message);
            toast.info(<IconWrap userIcon={faInfoCircle}>Copied message to your clipboard, just paste in chat ✌️</IconWrap>);
        }
    }

    return <Fragment>
        <Container onClick={handleVideoSelect}>
            <ImageContainer src={data.thumbnail} />
            <ContentContainer>
                <H2>{data.title}</H2>
                <SubHead>{data.creator} • {data.uploadDate}</SubHead>
                <SubHead>{data.description}</SubHead>
            </ContentContainer>
        </Container>
    </Fragment>
}

export default SearchResult;