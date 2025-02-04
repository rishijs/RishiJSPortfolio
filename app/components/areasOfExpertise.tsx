import SkillCard from "./skillCard";
import {SkillProps} from "./skillCard"
import Typography from "@mui/material/Typography";


const skills:Array<SkillProps> = [ 
    {name: "AoE1"},
    {name: "AoE2"},
    {name: "AoE3"},
    {name: "AoE4"},
    {name: "AoE5"},
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
                    /*
                    Python, Javascript, Java, C/C++/C#, GDScript, HTML/CSS, JDBC,
                    MySQL Tools/Frameworks: Three.js, React.js, Flask, Git, 
                    Unreal Engine, Unity, Godot, Jupyter Notebooks,
                    Pandas, NumPy, Matplotlib, Pygame
                    */
                  );
                })}
              </ul>
            </div>
        </div>
    );
}