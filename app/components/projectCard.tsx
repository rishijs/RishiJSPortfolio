import Image from "next/image";
import Button from '@mui/material/Button';
import { PropsWithChildren } from 'react';
import Link from "next/link";

export interface Props extends PropsWithChildren<any>{
    name?: string,
    basic_description?: string
    description?: string,
    image?: string,
}
  
const defaultProps:Props = {
    name: "Default",
    description: "Basic Project Description",
    image: '/git.png'
};

export default function ProjectDetails(props: Props) {
    const name = props.name ?? defaultProps.name
    const description = props.description?? defaultProps.description
    const image = props.image ?? defaultProps.image

    return(
        <Link
            className="flex !border-2 !border-white 
             bg-black
            gap-32 hover:!border-red-500 hover:!border-4
            w-full h-32"
            href="/projectPages"
            >
            <div className="flex items-center ml-12">
                <img
                    src={image!}
                    alt="Project"
                    className="h-12 w-12"
                />
            </div>
            <div className="container items-center content-center justify-end">
                <div className="grid grid-cols-1 text-white">
                    <a>{name}</a>
                    <a>{description}</a>
                </div>
            </div>
        </Link>
    );
}

