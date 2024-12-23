import React, { useCallback, useEffect, useState } from 'react'

const useFetch = (input,fetchSuggestions) => {
    const [suggestions, setSuggestions] = useState([])
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)

    const getFetchSuggestions = async(input) => {
        setLoading(true)
        setError(null)
       
       try {
        const result = await fetchSuggestions(input)
        setSuggestions(result)
        
        
       } catch (error) {
        console.log(error)
        setError("No suggestions")
        setSuggestions([])
       }
       finally{
        setLoading(false)
       }

    }

    const debounce = (cb,delay) => {
        let timer;
        return function(...args){
            if(timer)clearTimeout(timer);
            timer = setTimeout(()=>{
                cb(...args)
            },[delay])
        }
    }

    const handleDebounce = useCallback(debounce((input)=>{
        getFetchSuggestions(input);
    },500),[])
    
    useEffect(()=>{
        if(input.length>1){
            handleDebounce(input)
        }
        else{
            setSuggestions([])
        }
    },[input])

    return {suggestions,loading,error,setSuggestions};
}

export default useFetch