"use client";
import Image from "next/image";
import Button from '@mui/material/Button';
import { PropsWithChildren, useState, MouseEvent } from 'react';

export interface Props extends PropsWithChildren<any>{
    name?: string,
    basic_description?: string
    description?: string,
}
  
const defaultProps:Props = {
    name: "Default",
    basic_description: "Basic Project Description",
    description: "Advanced Project Description",
    testoptional: 0,
};

export default function ProjectCard(props: Props) {
    const name = props.name ?? defaultProps.name
    const basic_description = props.basic_description ?? defaultProps.basic_description
    const description = props.description?? defaultProps.description

    const [showAdvanced, setShowAdvanced] = useState(false);
    function displayAdvanced(e: MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        setShowAdvanced(true);
    }
    function hideAdvanced(e: MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        setShowAdvanced(false);
    }
    function switchToCustomProjectPage(e: MouseEvent<HTMLButtonElement>){
        displayAdvanced(e);
    }
    return(
        <Button
            className="flex border border-solid border-2 border-white
            justify-start bg-black
            gap-10 hover:bg-gray-700 text-white
            text-sm sm:text-base min-w-fit w-11/12 h-32 hover:w-full hover:h-64"
            onMouseOver={displayAdvanced}
            onMouseLeave={hideAdvanced}
            onClick={switchToCustomProjectPage}
            >
            {!showAdvanced && <Image
                src="/git.png"
                alt="Project"
                width={32}
                height={32}
                className="ml-12"
            />}
            {showAdvanced && <Image
                src="/git.png"
                alt="Project"
                width={64}
                height={64}
                className="ml-12"
            />}
            <div className="container">
                <div className="grid grid-cols-1">
                    <a>{name}</a>
                    {!showAdvanced && <a>{basic_description}</a>}
                    {showAdvanced && <a>{description}</a>}
                </div>
            </div>
        </Button>
    );
}

