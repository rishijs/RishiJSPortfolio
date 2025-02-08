import Image from "next/image";
import Button from '@mui/material/Button';
import { PropsWithChildren } from 'react';
import Link from "next/link";

export interface ProjectProps extends PropsWithChildren<any>{
    name?: string,
    basic_description?: string
    description?: string,
    image?: string,
}
  
const defaultProps:ProjectProps = {
    name: "Default",
    description: "Basic Project Description",
    image: '/git.png'
};

export default function ProjectDetails(props: ProjectProps) {
    props = { ...defaultProps, ...props };

    return(
        <Link href="/projectPages" passHref legacyBehavior>
        <a
            className="flex border-2 border-white bg-black gap-8
            hover:border-red-500 hover:border-4 w-full h-24"
        >
            <div className="flex items-center ml-8">
            <Image
                src={props.image!}
                alt="Project"
                width={48}
                height={48}
                className="h-12 w-12 object-scale-down"
            />
            </div>
            <div className="flex flex-col justify-center text-white pr-4">
            <span className="font-bold">{props.name}</span>
            <span className="text-xs">{props.description!.split("\n").map((line, index) => <span key={index}>{line}<br /></span>)}</span>
            </div>
        </a>
        </Link>
    );
}

