import {ProjectProps} from "../components/projectCard";
import ProjectCard from "app/components/projectCard";

const projects:Array<ProjectProps> = [
    {
      name: "Liferoot",
      description: ".....",
      image: "/projecticons/spiritbane.png",
      routingUrl: 'liferoot'
    },
    {
      name: "Mini Twitter Backend",
      description: "A back-end focused social media API made with a team of 2 \n Uses JDBC, Spring Boot, and a postgreSQL relational database",
      image: "/projecticons/spring_social_media.png",
      routingUrl: 'socialMedia'
    },
    {
      name: "WIP: Unannounced AWS Project",
      description: "This project is currently a work in progress. Stay tuned for more details!",
      image: "/projecticons/spring_social_media.png",
      routingUrl: 'awsProject'
    },
    {
      name: "WIP: Unannounced Full Stack Project",
      description: "This project is currently a work in progress. Stay tuned for more details!",
      image: "/projecticons/spring_social_media.png",
      routingUrl: 'fullStackProject'
    },
    {
      name: "Skyfall",
      description: "A 2d action puzzle game made in Godot inspired by tetris \n Worked on multiple large scope updates to enhance UX and gameplay features",
      image: "/projecticons/skyfall.png",
      routingUrl: 'skyfall'
    },
    {
      name: "Spiritbane",
      description: "Collect souls using a weapon that harvests power from them in an action arcade game made in Godot within 9 days",
      image: "/projecticons/spiritbane.png",
      routingUrl: 'spiritbane'
    },
    {
      name: "Striker",
      description: "....",
      image: "/projecticons/spiritbane.png",
      routingUrl: 'striker'
    },
    {
      name: "More Software Projects",
      description: "Other coursework and software projects worth exploring",
      image: "/git.png",
      routingUrl: 'softwareOther'
    },
    {
      name: "More Game Development Projects",
      description: "Other games worth exploring",
      image: "/itch.png",
      routingUrl: 'gameOther'
    },
  ];

export default function ProjectList(){
    return (
        <div className="mb-8">
            <ul className="grid grid-cols-1 gap-4">
            {projects.map(function(item:ProjectProps) {
                const {name, description,image, routingUrl} = item
                return <ProjectCard
                key={name}
                name={name}
                image={image}
                routingUrl={routingUrl}
                description={description}
                />
            })}
            </ul>
        </div>
    );
}