import SkillCard from "./skillCard";
import {SkillProps} from "../components/skillCard"
import Typography from "@mui/material/Typography";


const skills:Array<SkillProps> = [ 
    {name: "Full Stack Development"},
    {name: "Python"},
    {name: "Java"},
    {name: "Javascript"},
    {name: "C/C++/C#"},
    {name: "GDScript"},
    {name: "SQL"},
    {name: "React/Next.js"},
    {name: "Tailwind CSS"},
    {name: "Three.js"},
    {name: "JDBC"},
    {name: "Spring Boot"},
    {name: "Git"},
    {name: "Godot"},
    {name: "Unreal Engine"},
    {name: "Unity"},
    {name: "Computer Algorithms"},
    {name: "Data Structure"},
  ]

export default function Skills(){
    return(
        <div>
            <div className="flex flex-col">
              <ul
                className="flex flex-wrap gap-2"
              >
                {skills.map((item: SkillProps) => {
                  const name = item.name;
                  return (
                    <li key={name} className="bg-black text-black border border solid border-white">
                      <SkillCard name={name} className="text-black"/>
                    </li>
                  );
                })}
              </ul>
            </div>
        </div>
    );
}