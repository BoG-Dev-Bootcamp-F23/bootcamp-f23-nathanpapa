import { useState, useEffect, useRef } from 'react';

export default function Station(props) {
    function clicked() {
        props.setFilter(props.station);
        props.setClicked(props.station);
    }

    const clickedStyle = {
        backgroundColor: "white",
        color: "black"
    }

    return (
        <div className="station">
            {(props.clicked === props.station)
                ? <button style={clickedStyle} onClick={clicked}>{props.station}</button>
                : <button onClick={clicked}>{props.station}</button>
            }
        </div>
    );
}