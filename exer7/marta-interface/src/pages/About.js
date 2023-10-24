// get static data
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function About() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="aboutHeader">
                <p className="homeLink" onClick={() => {navigate("/")}}>Home</p>
                <h1>About Marta</h1>
                <p className="homeLink">&nbsp;</p>
            </div>
            <div className="aboutContent">
                <p>
                    MARTA is the nation’s ninth largest transit system and the largest of its kind
                    in the Southeast that provides bus, rail, and paratransit service.
                    With 40 years of operations under its belt, MARTA services three of the five core counties in the region
                    and generates $2.6 billion in economic impact to the state of Georgia.
                    Employees of the region’s fastest growing sectors overwhelmingly choose MARTA to get to and from work.
                    People from every demographic across the region trust MARTA with their routine transportation needs.
                </p>
                <img src="map.png" />
            </div>
        </div>
    );
}