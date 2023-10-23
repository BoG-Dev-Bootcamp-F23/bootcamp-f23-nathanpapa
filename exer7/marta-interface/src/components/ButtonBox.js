import { useState, useEffect, useRef } from 'react';

export default function ButtonBox(props) {
    const arrivingButton = useRef(null);
    const scheduledButton = useRef(null);
    const neButton = useRef(null);
    const swButton = useRef(null);

    function arrivingClicked() {
        if (arrivingButton.current.style.background !== "black") {
            arrivingButton.current.style.background = "black";
            arrivingButton.current.style.color = "white"; 
            scheduledButton.current.style.background = "white";
            scheduledButton.current.style.color = "black"; 
            neButton.current.style.background = "white";
            neButton.current.style.color = "black"; 
            swButton.current.style.background = "white";
            swButton.current.style.color = "black";
            props.setFilter("Arriving");
        } else {
            arrivingButton.current.style.background = "white";
            arrivingButton.current.style.color = "black";
            scheduledButton.current.style.background = "white";
            scheduledButton.current.style.color = "black"; 
            neButton.current.style.background = "white";
            neButton.current.style.color = "black"; 
            swButton.current.style.background = "white";
            swButton.current.style.color = "black";  
            props.setFilter("");
        }
    }

    function scheduledClicked() {
        if (scheduledButton.current.style.background !== "black") {
            arrivingButton.current.style.background = "white";
            arrivingButton.current.style.color = "black"; 
            scheduledButton.current.style.background = "black";
            scheduledButton.current.style.color = "white"; 
            neButton.current.style.background = "white";
            neButton.current.style.color = "black"; 
            swButton.current.style.background = "white";
            swButton.current.style.color = "black";
            props.setFilter("Scheduled");
        } else {
            arrivingButton.current.style.background = "white";
            arrivingButton.current.style.color = "black";
            scheduledButton.current.style.background = "white";
            scheduledButton.current.style.color = "black"; 
            neButton.current.style.background = "white";
            neButton.current.style.color = "black"; 
            swButton.current.style.background = "white";
            swButton.current.style.color = "black";  
            props.setFilter("");
        }
    }

    function neClicked() {
        if (neButton.current.style.background !== "black") {
            arrivingButton.current.style.background = "white";
            arrivingButton.current.style.color = "black"; 
            scheduledButton.current.style.background = "white";
            scheduledButton.current.style.color = "black"; 
            neButton.current.style.background = "black";
            neButton.current.style.color = "white"; 
            swButton.current.style.background = "white";
            swButton.current.style.color = "black";
        } else {
            arrivingButton.current.style.background = "white";
            arrivingButton.current.style.color = "black";
            scheduledButton.current.style.background = "white";
            scheduledButton.current.style.color = "black"; 
            neButton.current.style.background = "white";
            neButton.current.style.color = "black"; 
            swButton.current.style.background = "white";
            swButton.current.style.color = "black";  
        }
        if (neButton.current.innerText === "Northbound") {
            props.setFilter("Northbound");
        } else {
            props.setFilter("Eastbound");
        }
    }

    function swClicked() {
        if (arrivingButton.current.style.background !== "black") {
            arrivingButton.current.style.background = "white";
            arrivingButton.current.style.color = "black"; 
            scheduledButton.current.style.background = "white";
            scheduledButton.current.style.color = "black"; 
            neButton.current.style.background = "white";
            neButton.current.style.color = "black"; 
            swButton.current.style.background = "black";
            swButton.current.style.color = "white";
        } else {
            arrivingButton.current.style.background = "white";
            arrivingButton.current.style.color = "black";
            scheduledButton.current.style.background = "white";
            scheduledButton.current.style.color = "black"; 
            neButton.current.style.background = "white";
            neButton.current.style.color = "black"; 
            swButton.current.style.background = "white";
            swButton.current.style.color = "black";
        }
        if (swButton.current.innerText === "Southbound") {
            props.setFilter("Southbound");
        } else {
            props.setFilter("Westbound");
        }
    }

    return (
        <div className="buttonBox">
            <button onClick={arrivingClicked} ref={arrivingButton} className="button">Arriving</button>
            <button onClick={scheduledClicked} ref={scheduledButton} className="button">Scheduled</button>
            <button onClick={neClicked} ref={neButton} className="button">{(props.color === 'blue' || props.color === 'green') ? "Eastbound" : "Northbound"}</button>
            <button onClick={swClicked} ref={swButton} className="button">{(props.color === 'blue' || props.color === 'green') ? "Westbound" : "Southbound"}</button>
        </div>
    );
}