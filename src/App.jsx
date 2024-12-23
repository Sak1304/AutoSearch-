import React from 'react'
import './App.css'
import Autosearch from './components/Autosearch'


function App() {
   const staticData = [
    "apple",
    "banana",
    "berrl",
    "orange",
    "grape",
    "mango",
    "melon",
    "berry",
    "peach",
    "cherry",
    "plum",
  ];

  const fetchSuggestions = async(query) => {
    const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
    if(!response.ok){
      throw new Error("Network response not ok")
    }
    const data = await response.json();
    return data.recipes;
  }

  return (
   <div>
    <h1>Auto Search Box</h1>
    <Autosearch 
    placeholder="Enter food"
    fetchSuggestions={fetchSuggestions}
    // staticData={staticData}
    customLoading={<div>Loading...</div>}
    dataKey={"name"}
    />
   </div>
  )
}

export default App
