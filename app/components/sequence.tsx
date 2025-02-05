import React from 'react';
import Timeline from './timeline';

const timelineItems = [
    {
        date: "2016",
        description: "Event 1",
        cards:[{name: "AoE1"}, {name: "AoE1"}],
    },
    {
        date: "2020",
        description: "Event 2",
        cards:[{name: "Course1"}, {name: "Course2"}],
    },
    {
        date: "2022",
        description: "Event 3",
        cards:[{name: "Course3"}],
    },
    {
        date: "2024",
        description: "Event 4",
        cards:[{name: "Course4"}],
    },
];

 /*
Python, Javascript, Java, C/C++/C#, GDScript, HTML/CSS, JDBC,
MySQL Tools/Frameworks: Three.js, React.js, Flask, Git, 
Unreal Engine, Unity, Godot, Jupyter Notebooks,
Pandas, NumPy, Matplotlib, Pygame
*/


/*`Education: Rutgers University, New Brunswick
Bachelor of Science (B.S.) Major in Computer Science
GPA 3.44 January 2024

Data Management & Data Science, Artificial Intelligence, 
Computer Algorithms, Data Structures, Computer Architecture, 
Systems Programming, Imaging & Multimedia, Calculus,
Linear Algebra, Discrete Math, Numerical Analysis`
*/


export default function Sequence() {

    return (
        <div className="items-center justify-center">
            <Timeline items={timelineItems} />
        </div>
    );

};