import { useState, useEffect } from 'react';
import Station from './Station';

export default function Navbar(props) {
    return (
        <div className="navbar">
            <p class="navHeader">Select your starting station</p>
            <div className="stations">
                <Station station="All Stations" />
                {
                    props.data[props.color].map((station) => {
                        return (<Station station={station} />);
                    })
                }
            </div>
        </div>
    );
}