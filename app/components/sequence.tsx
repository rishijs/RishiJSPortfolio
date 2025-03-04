import React from 'react';
import Timeline from './timeline';

const timelineItems = [
    {
        date: "2016",
        description: "Learned my first programming language, developed OOP principles.",
        cards:[{name: "Intro To Computer Science"}, {name: "OOP"}, {name: "Java"}, {name: "Object Oriented Design"}],
    },
    {
        date: "2017-2019",
        description: "Made my first game, participated in multiple hackathons.",
        cards:[{name: "Python"}, {name: "Pygame"}, {name: "Javascript"}, {name: "HTML/CSS"}],
    },
    {
        date: "2019",
        description: "Started using game engines, learned how to use Unity.",
        cards:[{name: "Unity"}, {name: "C#"}, {name: "Virtual Reality"}, {name: "Game Development"}],
    },
    {
        date: "2020",
        description: "Started University @ Rutgers with a computer science focus.",
        cards:[{name: "Data Structures"}, {name: "Computer Science"}, {name: "Java"}],
    },
    {
        date: "2020-2023",
        description: "Switched to Unreal Engine, worked on multi-year projects, by myself, with plans to make an ambitious, inspired game. Realized I needed to heavily reduce scope and learn other skills to make a good game.",
        cards:[{name: "Unreal Engine"}, {name: "C++"}, {name: "Blueprints"}, {name: "Game Design"}, {name: "Game Development"}],
    },
    {
        date: "2020-2024",
        description: "Focused on university course work. Primarily focused on theory of computer science, with some interesting projects. Continued to participate in Hackathons.",
        cards:[{name: "Data Management and Data Science"}, {name: "Systems Programming"},
              {name: "Computer Architecture"}, {name: "Design and Analysis of Computer Algorithms"},
              {name: "Discrete Math"}, {name: "Numerical Analaysis"}, {name: "Principles of Programming Languages"}, {name: "Artificial Intelligence"},
              {name: "Imaging and Multimedia"}, {name: "Calculus"}, {name: "Physics"},
              {name: "C"},{name: "Python"},{name: "SQL"},{name: "JDBC"},] ,
    },
    {
        date: "2023-Present",
        description: "Learned Godot and started to minimized scope of games, with a focus on completing an MVP by a deadline. Partipated in 15+ Game Jams with teams of up to 10 inter-disciplinary members and made a complete game in each.",
        cards:[{name: "Godot"}, {name: "GDScript"}, {name: "OOP"}, {name: "Object Oriented Design"}, {name: "Game Design"}, {name: "Game Development"}],
    },
    {
        date: "2024",
        description: "Graduated From Rutgers University New Brunswick",
        cards:[{name: "Bachelor of Science"}, {name: "Computer Science Major"}],
    },
    {
        date: "2024-Present",
        description: "Started doing freelance work. Initially started with a platform called Data Annotation. My primary responsibility was querying and correcting LLM model responses for coding tasks.",
        cards:[{name: "Python"}, {name: "Javascript"}, {name: "Artificial Intelligence"}, {name: "LLM"}, {name: "Misc."}],
    },
    {
        date: "2024-Present",
        description: "Started work on a professional personal portfolio, but wasn't satisfied with its format until recently in 2025.",
        cards:[{name: "Three.js"}, {name: "Javascript"}, {name: "Typescript"}, {name: "Tailwind"}, {name: "React"}, {name: "Next"}],
    },
    {
        date: "2025",
        description: "Got a contracting opportunity, and was taught essential fullstack development skills in a professional environment.",
        cards:[{name: "Java"}, {name: "Javascript"}, {name: "Spring Boot"}, {name: "Angular"}, {name: "Communication"}],
    },
];


export default function Sequence() {

    return (
        <div className="items-center justify-center">
            <Timeline items={timelineItems.reverse()} />
        </div>
    );

};