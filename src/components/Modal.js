import React, {useState, useEffect} from "react";

const Modal = (props) =>{

const [drink, setDrink]= useState({})

    useEffect (()=> {
        fetch (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${props.caption}`)
        .then ((response) => response.json())
        .then ((response) => {
            setDrink(response.drinks[0])
            console.log(response.drinks)
        })
        
      }, [props.caption])


    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">{props.caption}</h4>
                </div>
                <div className="modal-body">
                    <p>Ingredients</p>
                    <ul>
                        {drink.strIngredient1 !== null && <li>{drink.strIngredient1}</li>}
                        {drink.strIngredient2 !== null && <li>{drink.strIngredient2}</li>}
                        {drink.strIngredient3 !== null && <li>{drink.strIngredient3}</li>}
                        {drink.strIngredient4 !== null && <li>{drink.strIngredient4}</li>}
                        {drink.strIngredient5 !== null && <li>{drink.strIngredient5}</li>}
                        {drink.strIngredient6 !== null && <li>{drink.strIngredient6}</li>}
                    
                    </ul>
                    <p>Here is your recipe:</p>
                    <p>{drink.strInstructions}</p>
                </div> 
                <div className="modal-footer">
                    <button className="button"
                    onClick = { props.onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal 