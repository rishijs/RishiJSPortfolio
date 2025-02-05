import Image from "next/image";
import Button from '@mui/material/Button';
import { PropsWithChildren } from 'react';

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
        <Button
            className="flex !border-2 !border-white 
            justify-start bg-black
            gap-32 hover:bg-gray-700
            w-full h-32"
            >
            <Image
                src={image!}
                alt="Project"
                width={64}
                height={64}
            />
            <div className="container">
                <div className="grid grid-cols-1 text-white">
                    <a>{name}</a>
                    <a>{description}</a>
                </div>
            </div>
        </Button>
    );
}

