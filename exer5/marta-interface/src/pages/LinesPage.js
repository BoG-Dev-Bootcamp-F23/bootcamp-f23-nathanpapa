// get static data
import stationData from '../server/stationData';
import trainData from '../server/trainData';
import ButtonBox from '../components/ButtonBox';
import Navbar from '../components/Navbar';
import TrainList from '../components/TrainList';
import { useState, useEffect } from 'react';

export default function LinesPage() {
    // initialize some currColor state
    const [currColor, setCurrColor] = useState("gold");

    return (
        <div>
            <div className="header">
                <h1>{currColor.toUpperCase()}</h1>
            </div>
            <div className="contentBox">
                <Navbar color={currColor} data={stationData} />
                <div className="column">
                    <ButtonBox color={currColor} />
                    <TrainList color={currColor} data={trainData} />
                </div>
            </div>
        </div>
    );
}