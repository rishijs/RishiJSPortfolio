import SkillCard from "./skillCard";
import {SkillProps} from "../components/skillCard"
import Typography from "@mui/material/Typography";


const skills: Array<SkillProps> = [
  { name: "Java" },
  { name: "TypeScript" },
  { name: "Python" },
  { name: "JavaScript" },
  { name: "SQL" },

  { name: "Spring Boot" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Tailwind CSS" },
  { name: "Node.js" },

  { name: "AWS" },
  { name: "Cassandra" },
  { name: "Redis" },
  { name: "Jenkins" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "JMeter" },

  { name: "Backend Development" },
  { name: "Distributed Systems" },
  { name: "Performance Optimization" },
  { name: "Jenkins CI/CD" },

  { name: "Godot" },
  { name: "Unity" },
  { name: "Unreal Engine" },
  { name: "Three.js" },
];

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