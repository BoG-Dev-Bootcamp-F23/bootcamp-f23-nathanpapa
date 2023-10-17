import React from "react";
import ChildComponent from "./ChildComponent";

const data = [
    {
        name: "Nathan",
        role: "Instructor",
        semesters: 3,
    },
    {
        name: "Zini",
        role: "TA",
        semesters: 2,
    },
    {
        name: "Long",
        role: "TA",
        semesters: 2,
    }
];

export default function ParentComponent() {
    return (
        <div>
            <h1>Bits of Good Developer Bootcamp Directory</h1>
            {data.map((person) => {
                return <ChildComponent {...person} />;
            })}
        </div>
    );
}