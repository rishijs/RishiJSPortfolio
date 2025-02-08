import Image from "next/image";
import {Props} from "../components/projectCard";
import ProjectCard from "app/components/projectCard";
import Events from "app/components/events";
import ProjectList from "app/components/projectList";

export const metadata = {
  title: 'Projects',
  description: 'Check out my latest work.',
}

export default function Projects() {
  return (
    <div className="grid grid-cols-1 mb-12 gap-10">

        <ProjectList />
        <Events />

    </div>
  );
}