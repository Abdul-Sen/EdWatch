import React, { Fragment } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const InputSearch = styled.input`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 5px;
  border: none;
  box-shadow: 10px 10px 40px -10px rgba(0,0,0,0.75);
  margin: 1rem;
  outline: none;
`;

const SearchBarInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr;
  justify-items: stretch;

  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 5px;
  border: none;
  box-shadow: 5px 10px 15px -15px rgba(0,0,0,0.75);
  margin: 1rem;
  background-color: #ffffff;
`;
const MainBar = styled.div`
@media (max-width: 768px) {
  grid-template-columns: 1fr;
}

  display: grid;
  grid-template-columns: 4fr 1fr;
  justify-items: stretch;
  justify-content: space-evenly;
  margin-bottom: 50px;
`;

const CustomSelect = styled.select`
align-self: center;
    padding: 1rem;
    border: none;
    border-radius: 5px;
    box-shadow: 5px 5px 15px -15px rgba(0,0,0,0.75);
    outline: none;
    padding: 1rem;
  margin: 1rem;
`;

const CustomInput = styled.input`
  outline: none;
  border:none;
`;

const Option = styled.option`
${({ disabled }) => disabled && `
    color: #cfcfcf;
  `}
`;

function SearchBar({ onChangeHandler, apibaseHandler }) {
  return (
    <Fragment>
    <MainBar>
      <SearchBarInput>
          <FontAwesomeIcon style={{alignSelf: "center", justifySelf: "center"}} icon={faSearch} />
          <CustomInput placeholder={"Search Videos"} type="text" onChange={onChangeHandler} />
      </SearchBarInput>
        <CustomSelect name="apiBase" id="apiBase" onChange={apibaseHandler}>
          <Option value="youtube">YouTube</Option>
          <Option value="vimeo">Vimeo</Option>
          <Option disabled value="twitch">Twitch</Option>
          <Option disabled value="dailyMotion">Daily Motion</Option>
        </CustomSelect>
        </MainBar>
    </Fragment>
  )
}

export default SearchBar;