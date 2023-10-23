import { useState, useEffect, useRef } from 'react';

export default function ButtonBox(props) {

    return (
        <div className="colorButtonBox">
            <button onClick={() => props.setCurrColor("gold")} className="colorButton" style={{backgroundColor: "gold"}}>Gold</button>
            <button onClick={() => props.setCurrColor("red")} className="colorButton" style={{backgroundColor: "red"}}>Red</button>
            <button onClick={() => props.setCurrColor("blue")} className="colorButton" style={{backgroundColor: "blue"}}>Blue</button>
            <button onClick={() => props.setCurrColor("green")} className="colorButton" style={{backgroundColor: "green"}}>Green</button>
        </div>
    );
}