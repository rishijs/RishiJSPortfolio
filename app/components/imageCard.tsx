import Image from "next/image";
import Button from '@mui/material/Button';
import { PropsWithChildren, useEffect, useState, MouseEvent } from 'react';
import { Typography } from "@mui/material";

export interface ImageProps extends PropsWithChildren<any>{
    name?: string,
    description?: string,
    link?: string,
    image?: string,
}

const defaultImage:ImageProps = {
    name: "Image",
    description: "Card Description",
    image:"resume.png",
};

export default function DataCard(props?: ImageProps) {
    props = props ?? defaultImage;
    return(
        <Button
            className="grid grid-cols-1 justify-items-center hover:text-black w-full aspect-square
            border-2 border-solid border-white"
            >
            <Typography className="text-xs md:text-sm lg:text-base  text-center break-words">
            {props.name}
            </Typography>

            <Image
                src={props.image!}
                alt="Project"
                width={256}
                height={256}
                className="w-cover h-cover"
            />

            <div className="grid grid-cols-1">
                <Typography className="hidden lg:flex text-xs md:text-sm lg:text-base text-center break-words">{props.description}</Typography>
            </div>
        </Button>
    );
}