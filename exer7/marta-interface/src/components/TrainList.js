import { useState, useEffect } from 'react';
import Train from './Train';

export default function TrainList(props) {
    const [data, setData] = useState([]);

    const URL = "http://13.59.196.129:3001";

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${URL}/arrivals/${props.color}`);
            const trainData = await response.json();
            setData(trainData);
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${URL}/arrivals/${props.color}`);
            const trainData = await response.json();
            if (props.filter === "Arriving") {
                setData(trainData.filter((train) => train["WAITING_TIME"] === "Arriving"));
            } else if (props.filter === "Scheduled") {
                setData(trainData.filter((train) => train["WAITING_TIME"] !== "Arriving"));
            } else if (props.filter === "Northbound") {
                setData(trainData.filter((train) => train["DIRECTION"] === "N"));
            } else if (props.filter === "Southbound") {
                setData(trainData.filter((train) => train["DIRECTION"] === "S"));
            } else if (props.filter === "Eastbound") {
                setData(trainData.filter((train) => train["DIRECTION"] === "E"));
            } else if (props.filter === "Westbound") {
                setData(trainData.filter((train) => train["DIRECTION"] === "W"));
            } else if (props.filter === "" || props.filter === "All Stations") {
                setData(trainData);
            } else if (props.filter !== "") {
                setData(trainData.filter((train) => train["STATION"].includes(props.filter.toUpperCase())));
            }
        }
        fetchData();
    }, [props.filter, props.color]);

    return (
        <div className="trainList">
            {data.length === 0 
                ? <p>No trains to show</p>
                : data?.map((train) => {
                    return (<Train data={train} color={props.color} />)
                })
            }
        </div>
    );
}