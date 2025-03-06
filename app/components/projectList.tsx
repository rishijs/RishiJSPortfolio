import {ProjectProps} from "../components/projectCard";
import ProjectCard from "app/components/projectCard";

const projects:Array<ProjectProps> = [
    {
      name: "Project Manager",
      description: "A full stack web application made with a Spring Boot back-end with postgreSQL and an Angular front-end",
      image: "/projectpictures/projectmanager/erd.png",
      routingUrl: 'projectManager'
    },
    {
      name: "Track Matcher",
      description: "Front-end focused game modes made using Angular and the Spotify API",
      image: "/projectpictures/trackmatcher/track_matcher.gif",
      routingUrl: 'trackMatcher'
    },
    {
      name: "Social Media Backend",
      description: "A back-end focused social media API made with a team of 2 \n Uses JDBC, Spring Boot, and a postgreSQL relational database",
      image: "/projecticons/spring_social_media.png",
      routingUrl: 'socialMedia'
    },
    {
      name: "Console Spot",
      description: "A front-end focused e-commerce website, made with a team of 4 \n Uses JDBC, Apache Tomcat, and a mySQL relational database",
      image: "/projecticons/console_spot.png",
      routingUrl: 'consoleSpot'
    },
    {
      name: "threeJET",
      description: "A gamified 3D portfolio made with three.js",
      image: "/projecticons/threeJet.png",
      routingUrl: 'threeJet'
    },
    {
      name: "More Software Projects",
      description: "Other coursework and personal projects worth exploring",
      image: "/git.png",
      routingUrl: 'softwareOther'
    },
    {
      name: "Fluxblade",
      description: "A 2-year long game project in Unreal Engine inspired by Destiny",
      image: "/projecticons/fluxblade.png",
      routingUrl: 'fluxblade'
    },
    {
      name: "Spectral War",
      description: "A 3d RTS game made in Godot with a team of 9 interdisciplinary developers",
      image: "/projecticons/spectral_war.png",
      routingUrl: 'spectralWar'
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