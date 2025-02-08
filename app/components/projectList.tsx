import {ProjectProps} from "../components/projectCard";
import ProjectCard from "app/components/projectCard";

const projects:Array<ProjectProps> = [
    {
      name: "Social Media Backend",
      description: "A back-end focused social media API made with a team of 2 \n Uses JDBC, Spring Boot, and a postgreSQL relational database",
      image: "/git.png"
    },
    {
      name: "Console Spot",
      description: "A front-end focused e-commerce website, made with a team of 4 \n Uses JDBC, Apache Tomcat, and a mySQL relational database",
      image: "/git.png"
    },
    {
      name: "threeJET",
      description: "A gamified 3D portfolio made with three.js",
      image: "/git.png"
    },
    {
      name: "More Software Projects",
      description: "Other coursework and personal projects worth exploring",
      image: "/git.png"
    },
    {
      name: "Fluxblade",
      description: "A 2-year long game project in Unreal Engine inspired by Destiny",
      image: "/git.png"
    },
    {
      name: "Honorbound",
      description: "A year long game project in Unreal Engine focused on game system architecture",
      image: "/git.png"
    },
    {
      name: "Eternal Harvest",
      description: "A 3d tower defense game in Godot based on Plants vs. Zombies \n Made in 9 days with a team of 4",
      image: "/git.png"
    },
    {
      name: "Project Astra",
      description: "A 3d FPS game made in Godot with procedural generation \n Made in 14 days as a solo developer",
      image: "/git.png"
    },
    {
      name: "Skyfall",
      description: "A 2d action puzzle game made in Godot inspired by tetris \n Worked on multiple large scope updates to enhance UX and gameplay features",
      image: "/git.png"
    },
    {
      name: "Spiritbane",
      description: "A 2d action game made in Godot inspired by whack-a-mole ",
      image: "/git.png"
    },
    {
      name: "More Game Development Projects",
      description: "Other games worth exploring",
      image: "/git.png"
    },
  ];

export default function ProjectList(){
    return (
        <div>
            <ul className="grid grid-cols-1 gap-4">
            {projects.map(function(item:ProjectProps) {
                const {name, description,image} = item
                return <ProjectCard
                key={name}
                name={name}
                image={image}
                description={description}
                />
            })}
            </ul>
        </div>
    );
}