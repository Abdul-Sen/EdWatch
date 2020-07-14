import React, { Fragment, useState, useEffect } from 'react';

import useDebounce from '../../customHooks/useDebounce';
import {searchForVideos} from '../../api/videoSearch';

import SearchResult from '../searchResult';
import Searchbar from '../searchbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch} from "@fortawesome/free-solid-svg-icons";


function Search(){

    const [searchTerm, setSearchTerm] = useState('');
    const [apibase, setApiBase] = useState("youtube");
    const [results, setResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
  
    useEffect(
      () => {
        // Make sure we have a value (user has entered something in input)
        if (debouncedSearchTerm) {
          // Set isSearching state
          console.log(debouncedSearchTerm, apibase);
          const fetchData = async ()=>{
            const result = await searchForVideos(debouncedSearchTerm,apibase);
            setIsSearching(false);
            setResults(result);
          }
          fetchData();

          // TODO - Call Videosearch wrapper here, inside, we will see if user wants to search from YT, VIMIO, DAILY MOTION etc
        } else {
          setResults([]);
          setIsSearching(false);
        }

      },
      [debouncedSearchTerm]
    );
  
    
  const changeApiBase = e =>{
    let newBase = e.target.value;
    setApiBase((current)=>(newBase));
  }

  const updateSearch = (e)=>{
      let {value} = e.target;
      setIsSearching(true);
      setSearchTerm(value);
  }
  
    return (
        <Fragment>
            <Searchbar onChangeHandler={updateSearch} apibaseHandler={changeApiBase} ></Searchbar>
            {isSearching && <FontAwesomeIcon icon={faCircleNotch} spin />}
            {results.length != 0 && results.map((val,ind)=>{
              return(
                <SearchResult data={val} key={ind} />
              )
            })}
        </Fragment>
    );
}

export default Search;