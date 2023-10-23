import { useState, useEffect } from 'react';
import Station from './Station';

export default function Navbar(props) {
    const [data, setData] = useState([]);
    const [clicked, setClicked] = useState("");
    const [stationsFilter, setStationsFilter] = useState("");

    const URL = "http://13.59.196.129:3001";

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${URL}/stations/${props.color}`);
            const stationData = await response.json();
            setData(stationData);
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${URL}/stations/${props.color}`);
            const stationData = await response.json();
            if (stationsFilter === "") {
                setData(stationData);
            } else {
                setData(stationData.filter((station) => station.toLowerCase().includes(stationsFilter.toLowerCase())));
            }
        }
        fetchData();
        console.log(data);
    }, [stationsFilter, props.color]);

    return (
        <div className="navbar">
            <input type="text"
                onChange={(e) => {
                    setStationsFilter(e.target.value);
                }} placeholder="Select your starting station" class="navHeader">
            </input>
            <div className="stations">
                <Station station="All Stations" setFilter={props.setFilter} clicked={clicked} setClicked={setClicked} />
                {
                    data.map((station) => {
                        return (<Station station={station} setFilter={props.setFilter} clicked={clicked} setClicked={setClicked} />);
                    })
                }
            </div>
        </div>
    );
}