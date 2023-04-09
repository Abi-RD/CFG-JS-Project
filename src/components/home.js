import React, { useState } from "react";
import { Link } from 'react-router-dom';
import cream_roll_log from '../assets/cream_roll_log.jpg';
import ingre_2_icecream from '../assets/ingre_2_icecream.jpg';
import icecream_sundae from '../assets/icecream_sundaejpg.jpg';
import icecream_collection from '../assets/icecream_collection.jpg';
import './home.css';

function Home() { 
    const [selectedImg, setSelectedImg] = useState(icecream_sundae);

    const handleImgClick = (img) => {
        setSelectedImg(img);
    };

    const picList = [icecream_sundae, cream_roll_log, ingre_2_icecream, icecream_collection,];
    const [index, setIndex] = useState(0);

    const onClickNext = () => {
        setIndex((index + 1) % picList.length);
        setSelectedImg(picList[(index + 1) % picList.length]);
    };

    const onClickPrevious = () => {
        setIndex((index - 1 + picList.length) % picList.length);
        setSelectedImg(picList[(index - 1 + picList.length) % picList.length]);
    };


    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <h1>Scrumptious Ice Cream</h1>
                    <h4 style={{ color: "red", fontSize: "20px", textAlign: "center" }}>
                        you choose the ingredient, we provide the recipes
                    </h4>
                    <br/>

                    <div>
                        <img 
                            src={selectedImg}
                            alt="Selected Images"
                            style={{ height: "500px", width: "700px" }}
                        />
                    </div>

                    <div>
                        <img
                            src={icecream_sundae}
                            alt="ice cream sundae"
                            style={{ height: "100px", width: "100px", margin: "5px" }}
                            onClick={() => handleImgClick(icecream_sundae)}
                        />

                        <img
                            src={cream_roll_log}
                            alt="ice cream roll lod"
                            style={{ height: "100px", width: "100px", margin: "5px" }}
                            onClick={() => handleImgClick(cream_roll_log)}
                        />

                        <img
                            src={ingre_2_icecream}
                            alt="roll ice cream"
                            style={{ height: "100px", width: "100px", margin: "5px" }}
                            onClick={() => handleImgClick(ingre_2_icecream)}
                        />
                        <img
                            src={icecream_collection}
                            alt="different flovurs of ice cream"
                            style={{ height: "100px", width: "100px", margin: "5px" }}
                            onClick={() => handleImgClick(icecream_collection)}
                        />
                    </div>

     
                    <div style={{ display: "flex", padding:"30px" }}>
                        <button style={{ fontSize: "18px" }} onClick={onClickPrevious}>
                        Previous
                        </button>
                        <button style={{ marginLeft: "5px", fontSize: "18px" }} onClick={onClickNext}>
                        Next
                        </button>
                    </div>

                    <p style={{fontSize: "24px", textAlign: "center", color: "black" }}>
                        Deliciously Tantalising Healthy <br></br>
                        home-made ice cream for every occassion 😋 <br></br> 
                        {/* windows button + full-stop for emoji */}
                        Pop over to the
                    </p>
        
                    <a
                        className="App-link"
                        href="https://www.bbcgoodfood.com/recipes/collection/ice-cream-recipes"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        recipes 
                    </a><br></br>

                    {/* link to go to recipes page */}
                    <div>
                        <Link to="/recipes">Recipes</Link>
                    </div>
                    <br/>
                </header>
            </div>
        </div>
    );
}

export default Home;
