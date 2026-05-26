import Image from "next/image";
import Button from '@mui/material/Button';
import { PropsWithChildren } from 'react';
import Link from "next/link";

export interface ProjectProps extends PropsWithChildren<any>{
    name?: string,
    basic_description?: string
    description?: string,
    image?: string,
    routingUrl?: string,
}
  
const defaultProps:ProjectProps = {
    name: "Default",
    description: "Basic Project Description",
    image: '/git.png',
    routingUrl: ''
};

export default function ProjectDetails(props: ProjectProps) {
    props = { ...defaultProps, ...props };
    const projectPageUrl = `/projectPages/${props.routingUrl}`;

    return(
        <Link href={projectPageUrl} legacyBehavior>
        <a
            className="relative overflow-hidden flex border-2 border-white bg-black gap-8
            hover:border-red-500 hover:border-4 w-full h-24 group"
        >
            <Image
                src={props.image!}
                alt="Project"
                fill
                className="object-cover opacity-20 group-hover:opacity-60 transition-opacity duration-300"
            />
            <div className="relative z-10 flex flex-col justify-center text-white pl-8 pr-4 transition-transform duration-300 group-hover:translate-x-2">
                <span className="font-bold drop-shadow-md">{props.name}</span>
                <span className="text-xs text-neutral-300 drop-shadow-md line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {props.description}
                </span>
            </div>
        </a>
        </Link>
    );
}
