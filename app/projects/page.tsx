import Image from "next/image";
import {Props} from "../components/projectDetails";
import ProjectDetails from "app/components/projectDetails";

export const metadata = {
  title: 'Projects',
  description: 'Check out my latest work.',
}

export default function Projects() {
  const projects:Array<Props> = [
    {
      name: "Default1",
      description: "Project Description1",
    },
    {
      name: "Default2",
      description: "Project Description2",
    },
    {
      name: "Default3",
      description: "Project Description3",
    },
    {
      name: "Default4",
      description: "Project Description4",
    },
    {
      name: "Default5",
      description: "Project Description5",
    },
    {
      name: "Default6",
      description: "Project Description6",
    },
    {
      name: "Default7",
      description: "Project Description7",
    },
  ];
  return (
    <div className="mb-12 gap-2">

      <main className="grid grid-cols-1">
        <div>
          <ul className="grid grid-cols-1 gap-2">
            {projects.map(function(item:Props) {
              const {name, description, ...remaining} = item
              return <ProjectDetails
                key={item.name}
                name={name}
                description={description}
              />
            })}
          </ul>
        </div>
      </main>

    </div>
  );
}