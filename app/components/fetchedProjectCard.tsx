import Button from '@mui/material/Button';
import { PropsWithChildren, useEffect, useState, MouseEvent } from 'react';
import { Link, Typography } from "@mui/material";

export interface LinkProps extends PropsWithChildren<any>{
    name?: string,
    description?: string,
    link?: string,
    image?: string,
    className?: string,
    hideTitle?: boolean,
}

const defaultLink:LinkProps = {
    name: "Link",
    description: "Card Description",
    link: "#",
    image: "favicon.ico",
    className: "",
    hideTitle: false,
};

export default function DataCard(props: LinkProps) {
    const { name, description, link, image, className, hideTitle } = { ...defaultLink, ...props };

    return (
        <Link
            className={`relative overflow-hidden border-2 border-solid !border-white hover:!border-red-500 hover:!border-4 flex flex-col items-center justify-center p-3 h-full min-h-[160px] transition-all duration-200 group ${className}`}
            href={link!}
            target="_blank" 
            rel="noopener noreferrer"
            underline="none"
        >
          <img 
            src={image!} 
            alt={name} 
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-40 transition-opacity duration-300" 
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
          <div className="relative z-10 flex flex-col items-center justify-center gap-1 w-full px-2 transition-transform duration-300 group-hover:-translate-y-1">
            {!hideTitle && (
              <Typography variant="inherit" className="text-white !font-bold !tracking-tight text-center break-words text-xs md:text-sm drop-shadow-lg">
              {name}
                </Typography>
              )
            }
            {hideTitle && (
              <Typography variant="inherit" className="opacity-0 group-hover:opacity-100 text-white !font-bold !tracking-tight text-center break-words text-xs md:text-sm drop-shadow-lg">
              {name}
                </Typography>
              )
            }

            {description && (
              <Typography variant="inherit" className="opacity-0 group-hover:opacity-100 text-neutral-100 !text-[10px] text-center line-clamp-5 leading-tight drop-shadow-md transition-opacity duration-300">
                {description}
              </Typography>
            )}
          </div>
        </Link>
      );
      
      
}