import Button from '@mui/material/Button';
import { PropsWithChildren } from 'react';
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
    props = { ...defaultBasic, ...props };
    return(
    <Button
        className="hover:text-black border-2 border-solid border-white hover:!bg-red-500 !font-[inherit]"
        >
        <Typography variant="inherit" className="!text-xs text-white text-start break-words">{props.name}</Typography>
    </Button>
    );
}