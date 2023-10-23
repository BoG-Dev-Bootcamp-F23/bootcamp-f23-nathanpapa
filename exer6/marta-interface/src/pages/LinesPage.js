// get static data
import stationData from '../server/stationData';
import trainData from '../server/trainData';
import ButtonBox from '../components/ButtonBox';
import Navbar from '../components/Navbar';
import TrainList from '../components/TrainList';
import ColorButtons from '../components/ColorButtons';
import { useState, useEffect } from 'react';

export default function LinesPage() {
    const [currColor, setCurrColor] = useState("gold");
    const [filter, setFilter] = useState("");

    return (
        <div>
            <div className="header">
                <h1>{currColor.toUpperCase()}</h1>
                <ColorButtons setCurrColor={setCurrColor} />
            </div>
            <div className="contentBox">
                <Navbar color={currColor} filter={filter} setFilter={setFilter}/>
                <div className="column">
                    <ButtonBox color={currColor} filter={filter} setFilter={setFilter} />
                    <TrainList color={currColor} data={trainData} filter={filter} setFilter={setFilter} />
                </div>
            </div>
        </div>
    );
}