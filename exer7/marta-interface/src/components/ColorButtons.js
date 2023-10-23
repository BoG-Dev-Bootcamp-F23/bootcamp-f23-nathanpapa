import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ButtonBox(props) {
    const navigate = useNavigate();

    return (
        <div className="colorButtonBox">
            <button onClick={() => {navigate("/lines/gold"); props.setColor("gold")}} className="colorButton" style={{backgroundColor: "gold"}}>Gold</button>
            <button onClick={() => {navigate("/lines/red"); props.setColor("red")}} className="colorButton" style={{backgroundColor: "red"}}>Red</button>
            <button onClick={() => {navigate("/lines/blue"); props.setColor("blue")}} className="colorButton" style={{backgroundColor: "blue"}}>Blue</button>
            <button onClick={() => {navigate("/lines/green"); props.setColor("green")}} className="colorButton" style={{backgroundColor: "green"}}>Green</button>
        </div>
    );
}