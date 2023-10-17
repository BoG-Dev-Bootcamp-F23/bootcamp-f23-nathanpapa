import { useState, useEffect } from 'react';

export default function ButtonBox(props) {
    return (
        <div className="buttonBox">
            <button className="button arrivingButton">Arriving</button>
            <button className="button">Scheduled</button>
            <button className="button">{(props.color === 'blue' || props.color === 'green') ? "Eastbound" : "Northbound"}</button>
            <button className="button">{(props.color === 'blue' || props.color === 'green') ? "Westbound" : "Southbound"}</button>
        </div>
    );
}