import React, {useState } from "react";
import { DataDisplayer } from "./DataDisplayer";



export function SearchBar() {
    const [text, setText] = useState("");
    

    //changing the state of the component to the input

    const handleTextChange = (event) => {
      setText(event.target.value);
    };
        
    const handleSubmit = (event) => {    
      event.preventDefault();
      setText("")
    };


    return (
      <div>
      <form className="searchBar"
        onSubmit={handleSubmit}>
        <label>Search for your ingredients: </label>
        <input
          type="text"
          aria-label="What ingredient do you fancy?"
          placeholder="What do you fancy?"
          value={text}
          onChange={handleTextChange}
        />
      </form>
        <DataDisplayer text = {text}/>
      </div>
    );
  }