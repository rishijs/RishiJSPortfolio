import Image from "next/image";
import {Props} from "../components/projectCard";
import ProjectCard from "../components/projectCard";

export const metadata = {
  title: 'Projects',
  description: 'Check out my latest work.',
}

export default function Projects() {
  const projects:Array<Props> = [
    {
      name: "Default1",
      basic_description: "Basic Project Description1",
      description: "Advanced Project Description1",
      testoptional: 0,
    },
    {
      name: "Default2",
      basic_description: "Basic Project Description2",
      description: "Advanced Project Description2",
      testoptional: 0,
    },
    {
      name: "Default3",
      basic_description: "Basic Project Description3",
      description: "Advanced Project Description3",
      testoptional: 0,
    },
    {
      name: "Default4",
      basic_description: "Basic Project Description4",
      description: "Advanced Project Description4",
      testoptional: 0,
    },
    {
      name: "Default5",
      basic_description: "Basic Project Description5",
      description: "Advanced Project Description5",
      testoptional: 0,
    },
    {
      name: "Default6",
      basic_description: "Basic Project Description6",
      description: "Advanced Project Description6",
      testoptional: 0,
    },
    {
      name: "Default7",
      basic_description: "Basic Project Description7",
      description: "Advanced Project Description7",
      testoptional: 0,
    },
  ];
  return (
    <div className="mb-12 gap-2">

      <main className="grid grid-cols-1">
        <div className="bg-white-400 overflow-y-auto px-4 py-4">
          <ul className="grid grid-cols-1 gap-2 border border-white">
            {projects.map(function(item:Props) {
              const {name, basic_description, description, ...remaining} = item
              return <ProjectCard 
                key={item.name}
                name={name}
                basic_description={basic_description}
                description={description}
              />
            })}
          </ul>
        </div>
      </main>

    </div>
  );
}