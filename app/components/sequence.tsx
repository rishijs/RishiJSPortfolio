import React from 'react';
import Timeline from './timeline';

const timelineItems = [
    {
        date: "2016",
        description: "Event 1",
    },
    {
        date: "2020",
        description: "Event 2",
    },
    {
        date: "2022",
        description: "Event 3",
    },
    {
        date: "2024",
        description: "Event 4",
    },
];

export default function Sequence() {

    return (
        <div className="items-center justify-center">
            <Timeline items={timelineItems} />
        </div>
    );

};