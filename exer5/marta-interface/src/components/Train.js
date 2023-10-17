import { useState, useEffect } from 'react';


export default function Train(props) {
    const lineBox = {
        display: 'flex',
        height: '60%',
        justifyContent: 'center',
        borderRadius: '.5em',
        width: '40%',
        backgroundColor: `${props.color}`,
        color: "white"
    }

    return (
        <div className="train">
            <div className="trainImageBox">
                <img src="m.png" />
            </div>
            <div className="trainInfo">
                <p>Midtown Station &rarr; Airport Station</p>
                <div className="info">
                    <div style={lineBox}>
                        <p>{props.color[0].toUpperCase() + props.color.slice(1)}</p>
                    </div>
                    <p className="green">On time</p>
                </div>
            </div>
            <div className="arrivalTime">
                <p className="green">3 mins</p>
            </div>
        </div>
    );
}