// get static data
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="homeHeader">
                <p>&nbsp;</p>
                <h1>MARTA</h1>
                <p className="aboutLink" onClick={()=> {navigate("/about")}}>About MARTA</p>
            </div>
            <div className="homeContent">
                <div className="routes">
                    <h2>View Routes Schedule</h2>
                    <p className="lineLink" onClick={() => {navigate("/lines/gold")}}>Gold Line</p>
                    <p className="lineLink" onClick={() => {navigate("/lines/red")}}>Red Line</p>
                    <p className="lineLink" onClick={() => {navigate("/lines/green")}}>Green Line</p>
                    <p className="lineLink" onClick={() => {navigate("/lines/blue")}}>Blue Line</p>
                </div>
                <img src="marta.png" />
            </div>
        </div>
    );
}