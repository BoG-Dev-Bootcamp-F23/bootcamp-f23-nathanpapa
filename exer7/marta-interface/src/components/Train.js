import { useState, useEffect } from 'react';


export default function Train(props) {
    const lineBox = {
        display: 'flex',
        height: '100%',
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
                <p>{props.data["STATION"]} &rarr; {props.data["DESTINATION"]}</p>
                <div className="info">
                    <div style={lineBox}>
                        <p>{props.color[0].toUpperCase() + props.color.slice(1)}</p>
                    </div>
                    <p className="green">On time</p>
                </div>
            </div>
            <div className="arrivalTime">
                {props.data["DELAY"] === "T0S"
                    ? <p className="green">{props.data["WAITING_TIME"]}</p>
                    : <p className="red">Delayed</p>
                }
            </div>
        </div>
    );
}