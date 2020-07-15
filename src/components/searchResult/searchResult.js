import React, { Fragment } from 'react';
import styled from 'styled-components';
import { getIsHost } from '../../api/signalR';
import { useDispatch } from 'react-redux';
import { updateVideoStateAsync } from '../../actions/videoState';
import {toast} from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faCheck} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    display: grid;
    grid-template-areas:
    "leftbar    rightbar";
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 100px 5px;
    grid-column-gap: 13px;
    grid-row-gap: 7px;
    &:active {
        background-color: ${props => props.theme.colors.iconColor.activePrimary};
    }
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
function SearchResult({ data }) {

    const dispatch = useDispatch();

    const IconWrap = ({userIcon, children})=>  <Fragment><FontAwesomeIcon icon={userIcon}> </FontAwesomeIcon> {children}</Fragment>;

    const handleVideoSelect = () => {
        console.log(`video URL is... ${data.video_url}`);
        if (getIsHost()) {
            // Play selected video
            console.log(`user is host, playing new video`);
            dispatch(updateVideoStateAsync({url: data.video_url}));
            toast(<IconWrap userIcon={faCheck}>Video loaded for all users</IconWrap>, {delay: 1000});
        }
        else {
            console.log(`user is not host, copying video to clipboard`);
            // Copy a message to your clipboard
            let message = `Please play ${data.video_url}`;
            // Create new element
            let el = document.createElement('textarea');
            // Set value (string to be copied)
            el.value = message;
            // Set non-editable to avoid focus and move outside of view
            el.setAttribute('readonly', '');
            el.style = { position: 'absolute', left: '-9999px' };
            document.body.appendChild(el);
            // Select text inside element
            el.select();
            // Copy text to clipboard
            document.execCommand('copy');
            // Remove temporary element
            document.body.removeChild(el);
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