import { useState, useEffect } from 'react';
import Station from './Station';

export default function Navbar(props) {
    const [data, setData] = useState([]);

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
            const response = await fetch(`${URL}/arrivals/${props.color}`);
            const stationData = await response.json();
            if (props.filter === "Arriving") {
                setData(stationData.filter((train) => train["WAITING_TIME"] === "Arriving"));
            } else if (props.filter === "Scheduled") {
                setData(stationData.filter((train) => train["WAITING_TIME"] !== "Arriving"));
            } else if (props.filter === "Northbound") {
                setData(stationData.filter((train) => train["DIRECTION"] === "N"));
            } else if (props.filter === "Southbound") {
                setData(stationData.filter((train) => train["DIRECTION"] === "S"));
            } else if (props.filter === "Eastbound") {
                setData(stationData.filter((train) => train["DIRECTION"] === "E"));
            } else if (props.filter === "Westbound") {
                setData(stationData.filter((train) => train["DIRECTION"] === "W"));
            } else {
                setData(stationData);
            }
        }
        fetchData();
    }, [props.filter]);

    return (
        <div className="navbar">
            <input type="text" placeholder="Select your starting station" class="navHeader"></input>
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