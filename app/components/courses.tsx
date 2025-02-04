import SkillCard from "./skillCard";
import {SkillProps} from "./skillCard"
import Typography from "@mui/material/Typography";


const skills:Array<SkillProps> = [ 
    {name: "Course1"},
    {name: "Course2"},
    {name: "Course3"},
    {name: "Course4"},
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
                  
                      /*`Education: Rutgers University, New Brunswick
                        Bachelor of Science (B.S.) Major in Computer Science
                        GPA 3.44 January 2024
               
                       Data Management & Data Science, Artificial Intelligence, 
                       Computer Algorithms, Data Structures, Computer Architecture, 
                       Systems Programming, Imaging & Multimedia, Calculus,
                       Linear Algebra, Discrete Math, Numerical Analysis`
                       */
              
                  );
                })}
              </ul>
            </div>
        </div>
    );
}