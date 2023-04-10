import {useState, useEffect } from "react";
import Modal from "./Modal"
import '../index.css';

export function DataDisplayer(props){

    const [data, setData] =useState([])

    //state to control the rendering of the <Modal/> component 
    //the initial state is an object with set properties, the values of the properties become the event target

    const [modal, setModal] = useState ({
        state: "not active",
        caption:""
    })

        //fetch data from the API

        useEffect (()=> {
            fetch (`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${props.text}`)
            .then ((response) => response.json())
            .then ((response) => {
                setData(response.drinks)
                //console.log(response.drinks)
            })
            
          }, [props.text])

        //handle the event when drink image is clicked 

        function handleClick (e) {
            e.preventDefault();
            console.log (e.target)
            setModal({
                state: "active",
                //to display the inner text of the <span> element
                caption: e.target.textContent
            })
            //console.log (modal)

        } 
        
    
            return (
                <div >
                
                    <p>Here are your possible drinks:</p>
                    <div className = "container">
                        <ul className="image-gallery">
                            {data.map ((drink) => {
                                return(
                                    <li onClick = {handleClick}>
                                        <img
                                            src = {drink.strDrinkThumb}
                                            alt = {drink.strDrink}
                                        />
                                        <div className="overlay"><span>{drink.strDrink}</span></div>
                                    </li>
                            )}
                        )}
                        </ul>
                    </div>
                            
                <div>
                    {modal.state === "active" && <Modal 
                        imgSrc= {modal.src}
                        caption = {modal.caption}
                        onClose = {()=> setModal("")}
                        />}
                </div>

                </div>
            )
        
        }