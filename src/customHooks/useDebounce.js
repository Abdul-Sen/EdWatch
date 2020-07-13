import React, {useState,useEffect} from 'react';

function useDebounce(value,delayTime){
    const [debounceValue,setDebounceValue] = useState(value);

    // call effect on user input change, atm this will call every time,
    // GOAL: Make it cut some calls?
    useEffect(()=>{
        
        //Set debounce val after user specified delay
        const debounceHandler = setTimeout(() => {
            setDebounceValue(value);
        },delayTime);

        // useEffect cleanup function
        return ()=>{
            clearTimeout(debounceHandler);
        }
    },[value]);


    return debounceValue;
}


export default useDebounce;
