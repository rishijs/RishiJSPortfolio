import {ProjectProps} from "../components/projectCard";
import ProjectCard from "app/components/projectCard";

const projects:Array<ProjectProps> = [
    {
      name: "Liferoot",
      description: "A procedurally generated 3D puzzle game built for Web and PC platforms. The player's goal is to expand their root system to 'decay' the sandbox environment.",
      image: "/banner/waves (1).png",
      routingUrl: 'liferoot'
    },
    {
      name: "WIP: Unannounced AWS Project",
      description: "This project is currently a work in progress. Stay tuned for more details!",
      image: "/banner/waves (2).png",
      routingUrl: 'awsProject'
    },
    {
      name: "WIP: Unannounced Full Stack Project",
      description: "This project is currently a work in progress. Stay tuned for more details!",
      image: "/banner/waves (6).png",
      routingUrl: 'fullstackProject'
    },
    {
      name: "More Software Projects",
      description: "Software projects and coursework pulled directly from github public repositories",
      image: "/banner/waves (4).png",
      routingUrl: 'softwareProjects'
    },
    {
      name: "More Game Development Projects",
      description: "Game development projects pulled directly from itch.io, including prototypes, game jam entries, and creative efforts",
      image: "/banner/waves (7).png",
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