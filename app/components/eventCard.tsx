import Button from '@mui/material/Button';
import { PropsWithChildren, useEffect, useState, MouseEvent } from 'react';
import { Typography } from "@mui/material";

export interface LinkProps extends PropsWithChildren<any>{
    name?: string,
    description?: string,
    link?: string,
    image?: string,
}

const defaultLink:LinkProps = {
    name: "Link",
    description: "Card Description",
    link: "#",
};

export default function DataCard(props?: LinkProps) {
    props = props ?? defaultLink;
    return(
        <Button
            className="hover:text-black w-full py-4 border-2 border-solid border-white"
            href={props.link!}
            >
            <div className="grid grid-cols-1">
                <Typography className="text-white text-center break-words text-xs md:text-sm lg:text-base">{props.name}</Typography>
                <Typography className="text-white hidden sm:flex text-xs md:text-sm lg:text-base  text-center break-words">{props.description}</Typography>
            </div>
        </Button>
    );
}