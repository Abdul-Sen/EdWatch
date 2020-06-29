import React, { useState, useRef, useEffect, Fragment } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { ThemeButton } from '../../styles';
import {changeUrl} from '../../actions/videoState';
import {useDispatch, useSelector} from 'react-redux';

const AbsoluteContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

/* Player ratio: 100 / (1280 / 720) */
const FixedWrapper = styled.div`
  position: relative;
  margin-top:30px;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
`;

const SearchVideo = styled.input`
    border-radius: 4px;
    border: none;
    margin: 5px;
    padding: 5px;
    outline-color: #a3a3a3;
    font-size: ${props => props.large ? props.theme.fontSizes.large : props.theme.fontSizes.medium};
`;

const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const SearchPromptContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #d2f0fa;
`;


const SearchButton = styled(ThemeButton)`
    margin: 8px;
    padding: ${ props => props.small ? "0.5rem" : "0.8rem"};
`;

/**
 * 
 * @param {url} props is used to play that YT video
 */
function Player(props) {

    const state = useSelector((rootState)=> rootState.videoState);
    const dispatch = useDispatch();

    const loadVideo = (refElement) => {
        // sanitize input
        let refValue = refElement.current.value;
        //TODO
        if(refValue != null && isValidUrl(refValue))
        {
            dispatch(changeUrl(refValue));
        }
    }

    useEffect(()=>{
        if(isValidUrl(state.url))
        {
            // Let signlar know this is the video that should be streamed
            console.log(`Letting my app know that this is the URL to use`);
            
        }
    },[state.url])

    const boxRefMain = useRef(null);
    const boxRefSecondary = useRef(null);
    const playerRef = useRef(null);

    function isValidUrl(string) {
        try {
          new URL(string);
        } catch (_) {
            console.log(`not valid url`)
          return false;  
        }
      
        return true;
      }

    const logProgress = (progressObj) => {
        console.log(`Test fucntion called`);
        console.log(progressObj);
    }
    const seekView = (thing) => {
        console.log(`seekview called`);
        console.log(thing);
    }

    const newPosVid = () => {
        console.log(`going to new position`);
        playerRef.current.seekTo(5);
    }
    return (
        <div>
            <FixedWrapper>
                <AbsoluteContainer>
                    {state.url == null ?
                        <SearchPromptContainer>
                            <Flex>
                                <SearchVideo ref={boxRefMain} placeholder={"Enter Video URL"} large type="text"></SearchVideo>
                                <SearchButton onClick={()=>{loadVideo(boxRefMain)}}>
                                    Load <FontAwesomeIcon icon={faChevronRight} />
                                </SearchButton>
                            </Flex>
                        </SearchPromptContainer> :
                        <ReactPlayer width='100%' height="100%" ref={playerRef} playing={true} config={{ youtube: { playerVars: { start: 0 } } }} onSeek={seekView} controls url={state.url} onProgress={logProgress}  ></ReactPlayer>}
                </AbsoluteContainer>
            </FixedWrapper>
            {state.url != null &&
            <Fragment>
            <SearchVideo ref={boxRefSecondary} type="text" placeholder={"Enter Video URL"} ></SearchVideo>
            <SearchButton small onClick={()=>{loadVideo(boxRefSecondary)}}>
                Load <FontAwesomeIcon icon={faChevronRight} />
            </SearchButton>
            </Fragment>
            }
        </div>
    )
}

export default Player;