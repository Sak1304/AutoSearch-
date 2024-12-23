import React from 'react'

const Suggestionlist = ({
    suggestions,
    dataKey,
    highlight,
    onOptionClick
}) => {
    const highlighttext =(text,highlight) => {
        const parts = text.split(new RegExp(`(${highlight})`,"gi"));
        return(
            <span>
                {
                    parts.map((part,index)=>{
                        return part.toLowerCase()===highlight.toLowerCase()?(
                            <b key={index}>{part}</b>
                        ):(
                            part
                        );
                    })
                }
            </span>
        );
    };
  return (

    
    <div>
        {
            suggestions.map((suggestion,index)=>{
                const currentsuggestion = dataKey? suggestion[dataKey] : suggestion;

                return(
                    <li key={index} className="suggestion-item" onClick={()=>onOptionClick(currentsuggestion)}>
                        {highlighttext(currentsuggestion,highlight)}
                    </li>
                );
            })
        }
    </div>
  )
};

export default Suggestionlist