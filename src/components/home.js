import React, { useState } from "react";
import { Link } from 'react-router-dom';
import sticky from '../assets/sticky.jpg';
import xmas from '../assets/xmas.jpg';
import jam from '../assets/jam.jpg';
import mess from '../assets/mess.jpg';
import battenburg from '../assets/battenburg.jpg';
import bb_fool from '../assets/bb_fool.png'
import './home.css';

function Home() { 
    const [selectedImg, setSelectedImg] = useState(sticky);

    const handleImgClick = (img) => {
        setSelectedImg(img);
    };

    const picList = [sticky, xmas, jam, mess, battenburg, bb_fool];
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
                    <h1>Scrumptious Desserts and Cakes</h1>
                    <h4 style={{ color: "red", fontSize: "20px", fontWeight: 'bold', textAlign: "center" }}>
                        you choose the ingredient, we provide the recipes
                    </h4>
                    <br/>

                    <div>
                        <img 
                            src={selectedImg}
                            alt="Selected Images"
                            style={{ height: "535px", width: "770px" }}
                        />
                    </div>

                    <div>
                        <img
                            src={sticky}
                            alt="Sticky toffee pudding"
                            style={{ height: "80px", width: "100px", margin: "5px" }}
                            onClick={() => handleImgClick(sticky)}
                        />
                        <img
                            src={xmas}
                            alt="christmas pudding trifle"
                            style={{ height: "80px", width: "100px", margin: "5px" }}
                            onClick={() => handleImgClick(xmas)}
                        />
                        <img
                            src={jam}
                            alt="jam roly poly"
                            style={{ height: "80px", width: "100px", margin: "5px" }}
                            onClick={() => handleImgClick(jam)}
                        />
                        <img
                            src={mess}
                            alt="eton mess"
                            style={{ height: "80px", width: "100px", margin: "5px" }}
                            onClick={() => handleImgClick(mess)}
                        />
                        <img
                            src={battenburg}
                            alt="battenburg cake"
                            style={{ height: "80px", width: "100px", margin: "5px" }}
                            onClick={() => handleImgClick(battenburg)}
                        />
                         <img
                            src={bb_fool}
                            alt="blackberry fool"
                            style={{ height: "80px", width: "100px", margin: "5px" }}
                            onClick={() => handleImgClick(bb_fool)}
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
                        For Deliciously Tantalising Healthy <br></br>
                        home-made desserts and cakes for every occassion 😋 <br></br> 
                        {/* windows button + full-stop for emoji */}
                        Pop over to the
                    </p>
                            
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
