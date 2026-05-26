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
      name: "WIP: Unannounced AWS Project",
      description: "This project is currently a work in progress. Stay tuned for more details!",
      image: "/projecticons/spring_social_media.png",
      routingUrl: 'awsProject'
    },
    {
      name: "WIP: Unannounced Full Stack Project",
      description: "This project is currently a work in progress. Stay tuned for more details!",
      image: "/projecticons/spring_social_media.png",
      routingUrl: 'fullstackProject'
    },
    {
      name: "More Software Projects",
      description: "Software projects and coursework pulled directly from github public repositories",
      image: "/git.png",
      routingUrl: 'softwareProjects'
    },
    {
      name: "More Game Development Projects",
      description: "Game development projects pulled directly from itch.io, including prototypes, game jam entries, and creative efforts",
      image: "/itch.png",
      routingUrl: 'gameProjects'
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