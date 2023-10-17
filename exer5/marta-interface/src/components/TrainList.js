import { useState, useEffect } from 'react';
import Train from './Train';

export default function TrainList(props) {
    return (
        <div className="trainList">
            {props.data["RailArrivals"].map((train) => {
                return (
                        <Train data={train} color={props.color} />
                );
            })}
        </div>
    );
}