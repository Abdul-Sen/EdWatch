import React, { Fragment, useState, useEffect } from 'react';
import useDebounce from '../../customHooks/useDebounce';
import {searchForVideos} from '../../api/videoSearch';
import styled from 'styled-components';


const InputSearch = styled.input`
  
`;

function SearchBar({onChangeHandler, apibaseHandler}) {

  return (
    <Fragment>
      <InputSearch type="text" onChange={onChangeHandler} />
      <select name="apiBase" id="apiBase" onChange={apibaseHandler}>
        <option value="youtube">YouTube</option>
        <option value="dailyMotion">Daily Motion</option>
        <option value="vimeo">Vimeo</option>
        <option value="twitch">Twitch</option>
      </select> 
      
      {/* searchbar
      <input type={"text"} onChange={e => setSearchTerm(e.target.value)}></input>
      <label for="apiBase">Choose the site you want to search</label>
      <select name="apiBase" id="apiBase" onChange={changeApiBase}>
        <option value="youtube">YouTube</option>
        <option value="dailyMotion">Daily Motion</option>
        <option value="vimeo">Vimeo</option>
        <option value="twitch">Twitch</option>
      </select> */}

    </Fragment>
  )
}

export default SearchBar;