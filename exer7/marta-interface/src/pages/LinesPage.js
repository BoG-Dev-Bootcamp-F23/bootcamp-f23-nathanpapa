// get static data
import ButtonBox from '../components/ButtonBox';
import Navbar from '../components/Navbar';
import TrainList from '../components/TrainList';
import ColorButtons from '../components/ColorButtons';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function LinesPage(props) {
    const params = useParams();
    const [color, setColor] = useState(params.color);
    const [filter, setFilter] = useState("");

    return (
        <div>
            <div className="header">
                <h1>{color.toUpperCase()}</h1>
                <ColorButtons setColor={setColor} />
            </div>
            <div className="contentBox">
                <Navbar color={color} filter={filter} setFilter={setFilter}/>
                <div className="column">
                    <ButtonBox color={color} filter={filter} setFilter={setFilter} />
                    <TrainList color={color} filter={filter} setFilter={setFilter} />
                </div>
            </div>
        </div>
    );
}