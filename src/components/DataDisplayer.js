import {useState, useEffect } from "react";
import Modal from "./Modal"
import '../index.css';

export function DataDisplayer(){

    const [data, setData] =useState([])

    //state to control the rendering of the <Modal/> component 
    //the initial state is an object with set properties, the values of the properties become the event target

    const [modal, setModal] = useState ({
        state: "not active",
        caption:""
    })

        //fetch data from the API
        useEffect (()=> {
            fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert`)
            .then ((response) => response.json())
            .then ((response) => {setData(response.meals)
            })
            
          }, [data])

        //handle the event when drink image is clicked 

        function handleClick (e) {
            e.preventDefault();
            //console.log (e.target)
            setModal({
                state: "active",
                //to display the inner text of the <span> element
                caption: e.target.textContent
            })
            //console.log (modal)

        } 
        
    
            return (
                <div>
                <p className="displayer-title">Here are some delicious recipes to go with your gelato! </p>
                <p className="displayer-comment">Click on them to discover more!</p>
                    <div className = "container">
                        <ul className="image-gallery">
                            {data.map ((item) => {
                                return(
                                    <li onClick = {handleClick}>
                                         <img
                                            src = {item.strMealThumb}
                                            alt = {item.strMeal}
                                        />
                                        <div className="overlay"><span>{item.strMeal}</span></div>
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