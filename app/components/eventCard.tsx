import Button from '@mui/material/Button';
import { PropsWithChildren, useEffect, useState, MouseEvent } from 'react';
import { Link, Typography } from "@mui/material";

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
    image: "favicon.ico",
};

export default function DataCard(props?: LinkProps) {
  props = { ...defaultLink, ...props };

    return (
        <Link
            className="border-2 border-solid !border-white hover:!border-red-500 hover:!border-4 flex flex-col items-center justify-center p-4 h-32"
            href={props.link!}
            target="_blank" 
            rel="noopener noreferrer"
        >
          <Typography className="text-white !font-semibold !tracking-tighter text-center break-words text-xs md:text-sm lg:text-base">
            {props.name}
          </Typography>
          <img src={props.image!} alt="Event" className="h-12 w-12 mt-2" />
        </Link>
      );
      
      
}