import { useState, useEffect } from 'react';

export default function Station(props) {
    return (
        <div className="station">
            <p>{props.station}</p>
        </div>
    );
}