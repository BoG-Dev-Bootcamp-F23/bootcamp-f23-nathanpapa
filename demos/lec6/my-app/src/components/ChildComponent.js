import React from "react";

export default function ChildComponent(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Role: {props.role}</p>
            <p>Semesters: {props.semesters}</p>
        </div>
    );
}