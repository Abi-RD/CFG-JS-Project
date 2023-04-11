import React, { useState} from 'react';
import { DataDisplayer } from './DataDisplayer';


export function SearchBar () {

    const [term, setTerm] = useState ("")

    const handleChange = (e) => {
        setTerm (e.target.value)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log (term)
        //setTerm ("")
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <label>What ingredient would you use today?</label>
                <input 
                    type ="text"
                    aria-label = "ingredient chosen"
                    placeholder = "Search for your ingredient"
                    value = {term}
                    onChange = {handleChange}
                />
            </form>

            <DataDisplayer 
              ingredient = {term}/>
        </div>
    )
}