// get static data
import ButtonBox from '../components/ButtonBox';
import Navbar from '../components/Navbar';
import TrainList from '../components/TrainList';
import ColorButtons from '../components/ColorButtons';
import { useState, useEffect } from 'react';

export default function LinesPage(props) {
    const [filter, setFilter] = useState("");

    return (
        <div>
            <div className="header">
                <h1>{props.color.toUpperCase()}</h1>
                <ColorButtons setColor={props.setColor} />
            </div>
            <div className="contentBox">
                <Navbar color={props.color} filter={filter} setFilter={setFilter}/>
                <div className="column">
                    <ButtonBox color={props.color} filter={filter} setFilter={setFilter} />
                    <TrainList color={props.color} filter={filter} setFilter={setFilter} />
                </div>
            </div>
        </div>
    );
}