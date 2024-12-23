import React, { useEffect, useState } from 'react'
import "./styles.css";

import Suggestionlist from './Suggestionlist'
import useFetch from '../hooks/useFetch'

const Autosearch = ({
    placeholder="",
    fetchSuggestions,
    customLoading,
    staticData,
    dataKey
}) => {
    const [inputValue,setInputValue] = useState("")

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const {suggestions,loading,error,setSuggestions} = useFetch(inputValue,fetchSuggestions)

    useEffect(()=>{
        console.log(suggestions)
    },[suggestions])

    const onOptionClick = (query) => {
        setInputValue(query);
        setSuggestions([])
    }

  return (
    <div className="container">
        <input 
        value={inputValue}
        placeholder={placeholder}
        onChange={(e)=>handleInput(e)}
        onBlur={(e)=> console.log(e.target.value)}
        // onFocus={()=> console.log("no focus")}
        type="text" />

        {
            (suggestions.length>0||loading)&&(
                <ul className='suggestions-list'>
                    {error && <div className='error'>{error}</div>}
                    {loading && <div className='loading'>{customLoading}</div>}

                    <Suggestionlist 
                    suggestions={suggestions}
                    dataKey={dataKey}
                    highlight={inputValue}
                    onOptionClick={onOptionClick}
                    />
                </ul>
            )
        }

    </div>
  )
}

export default Autosearch;