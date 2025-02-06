import Button from '@mui/material/Button';
import { PropsWithChildren, useEffect, useState, MouseEvent } from 'react';
import { Typography } from "@mui/material";

export interface SkillProps extends PropsWithChildren<any>{
    name?: string,
    description?: string,
    advanced_description?: string,
    link?: string,
    image?: string,
}

const defaultBasic:SkillProps = {
    name: "Skill",
};

export default function DataCard(props?: SkillProps) {
    props = props ?? defaultBasic;
    return(
    <Button
        className="hover:text-black border-2 border-solid border-white hover:!bg-red-500"
        >
        <Typography className="text-white text-xs md:text-sm lg:text-base text-start break-all">{props.name}</Typography>
    </Button>
    );
}