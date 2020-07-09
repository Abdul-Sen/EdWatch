import React, { useState, useRef, useEffect, Fragment } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { ThemeButton } from '../../styles';
import { updateState, updateStateAsync } from '../../actions/videoState';
import { useDispatch, useSelector } from 'react-redux';
import { getIsHost } from '../../utils/signalR';

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
    flex-wrap: wrap;
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

    const state = useSelector((rootState) => rootState.videoState);
    const dispatch = useDispatch();

    const loadVideo = (refElement) => {
        // sanitize input
        let refValue = refElement.current.value;
        //TODO
        if (refValue != null && isValidUrl(refValue)) {
            dispatch(updateStateAsync({
                ...state,
                url: refValue
            }));
        }
    }


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

    useEffect(()=>{
        if(state.seekTo == true && getIsHost() == false && state.url != null)
        {
            console.log(`calling seekto`);
            seekToPos(parseFloat(state.playedSeconds));
            dispatch(updateState({...state,seekTo: false}));
        }

    },[state.seekTo])

    const checkIfSeekedByHost = (progressObj) => {

        if (progressObj.playedSeconds - state.playedSeconds > 2 || progressObj.playedSeconds - state.playedSeconds < - 2) {
            console.log(`seek detected`);
            console.log(`-------------------------------`)
            console.log(`new played: ${progressObj.playedSeconds}.`);
            console.log(`current played: ${state.playedSeconds}.`);
            console.log(`difference: ${progressObj.playedSeconds - state.playedSeconds}.`);
            console.log(`-------------------------------`)
            dispatch(updateStateAsync({
                ...state,
                playedSeconds: progressObj.playedSeconds,
                seekTo: true
            }));
            dispatch(updateState({
                ...state,
                seekTo: false
            }));
        }
        else{
            dispatch(updateState({
                ...state,
                playedSeconds: progressObj.playedSeconds
            }));
        }
    }

    const seekToPos = (val)=>{
        playerRef.current.seekTo(val);
    }

    const handlePlay = () => {
        dispatch(updateStateAsync({
            ...state,
            playing: true
        }));
    }

    const handlePause = () => {
        dispatch(updateStateAsync({
            ...state,
            playing: false
        }));
    }

    const getPlayer =
        getIsHost() ?
            <ReactPlayer width='100%' height="100%" ref={playerRef} playing={state.playing} controls url={state.url} onPlay={handlePlay} onPause={handlePause} onProgress={checkIfSeekedByHost} progressInterval={1000}></ReactPlayer>
            :
            <ReactPlayer width='100%' height="100%" ref={playerRef} playing={state.playing} controls={false} url={state.url} volume={1.0}></ReactPlayer>

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
                        getPlayer
                    }
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