"use client";
import Image from "next/image";
import Button from '@mui/material/Button';
import { PropsWithChildren, useEffect, useState, MouseEvent } from 'react';
import { Typography } from "@mui/material";

export enum CardType {
    Basic,
    Description,
    Link,
    Image
}

export interface Props extends PropsWithChildren<any>{
    card_type?: CardType,
    name?: string,
    description?: string,
    advanced_description?: string,
    link?: string,
    image?: string,
}

const defaultBasic:Props = {
    name: "Basic",
    card_type:CardType.Basic,
};

const defaultDescription:Props = {
    name: "Description",
    description: "Card Description",
    advanced_description: "Card Advanced Description",
    card_type:CardType.Description,
};

const defaultLink:Props = {
    name: "Link",
    description: "Card Description",
    advanced_description: "Card Advanced Description",
    link: "#",
    card_type:CardType.Link,
};

const defaultImage:Props = {
    name: "Image",
    description: "Card Description",
    advanced_description: "Card Advanced Description",
    card_type:CardType.Image,
    image:"next.svg",
};

export default function DataCard(props: Props) {
    const card_type = props.card_type
    
    const [name, setName] = useState<string | undefined>(undefined);
    const [description, setDescription] = useState<string | undefined>(undefined);
    const [advanced_description, setAdvancedDescription] = useState<string | undefined>(undefined);
    const [link, setLink] = useState<string | undefined>(undefined);
    const [image, setImage] = useState<string | undefined>(undefined);

    const [basicCard, setBasicCard] = useState(false);
    const [descriptionCard, setDescriptionCard] = useState(false);
    const [linkCard, setLinkCard] = useState(false);
    const [imageCard, setImageCard] = useState(false);

    useEffect(() => {
        setBasicCard(false);
        setDescriptionCard(false);
        setLinkCard(false);
        setImageCard(false);

        switch (card_type) {
            case CardType.Basic:
                setName(props.name ?? defaultBasic.name);
                setBasicCard(true);
                break;
            case CardType.Description:
                setName(props.name ?? defaultDescription.name);
                setDescription(props.description ?? defaultDescription.description);
                setAdvancedDescription(props.advanced_description ?? defaultDescription.advanced_description);
                setDescriptionCard(true);
                break;
            case CardType.Link:
                setName(props.name ?? defaultLink.name);
                setDescription(props.description ?? defaultLink.description);
                setAdvancedDescription(props.advanced_description ?? defaultLink.advanced_description);
                setLink(props.link ?? defaultLink.link);
                setLinkCard(true);
                break;
            case CardType.Image:
                setName(props.name ?? defaultImage.name);
                setDescription(props.description ?? defaultImage.description);
                setAdvancedDescription(props.advanced_description ?? defaultImage.advanced_description);
                setImage(props.image ?? defaultImage.image);
                setImageCard(true);
                break;
            default:
                setName(props.name ?? defaultBasic.name);
                setBasicCard(true);
                break;
        }
    }, [card_type, props.name, props.description, props.advanced_description, props.link, props.image]);

    const [showAdvanced, setShowAdvanced] = useState(false);
    function displayAdvanced(e: MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        setShowAdvanced(true);
    }
    function hideAdvanced(e: MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        setShowAdvanced(false);
    }
    return(
        <div>
            {basicCard && <Button
            className="hover:text-black border-2 border-solid border-white"
            onMouseOver={displayAdvanced}
            onMouseLeave={hideAdvanced}
            >
            <Typography className="text-xs md:text-sm lg:text-base text-start break-all">{name}</Typography>
            </Button>}


            {descriptionCard && <Button
            className="hover:text-black w-full text-xs md:text-sm lg:text-base border-2 border-solid border-white"
            onMouseOver={displayAdvanced}
            onMouseLeave={hideAdvanced}
            >
            <div className="grid grid-cols-1 py-4">
                <Typography className="text-xs md:text-sm lg:text-base  text-center break-words">{name}</Typography>
                <Typography className="hidden sm:flex text-xs md:text-sm lg:text-base  text-center break-words">{description}</Typography>
            </div>
            </Button>}


            {linkCard && <Button
            className="hover:text-black w-full py-4 border-2 border-solid border-white"
            onMouseOver={displayAdvanced}
            onMouseLeave={hideAdvanced}
            href={link!}
            >
            <div className="grid grid-cols-1">
                <Typography className="text-center break-words text-xs md:text-sm lg:text-base">{name}</Typography>
                <Typography className="hidden sm:flex text-xs md:text-sm lg:text-base  text-center break-words">{description}</Typography>
            </div>
            </Button>}


            {imageCard && <Button
            className="grid grid-cols-1 justify-items-center hover:text-black w-full aspect-square
            border-2 border-solid border-white"
            onMouseOver={displayAdvanced}
            onMouseLeave={hideAdvanced}
            >
            <Typography className="text-xs md:text-sm lg:text-base  text-center break-words">
            {name}
            </Typography>

            <Image
                src={image!}
                alt="Project"
                width={256}
                height={256}
                className="w-cover h-cover"
            />

            <div className="grid grid-cols-1">
                <Typography className="hidden lg:flex text-xs md:text-sm lg:text-base text-center break-words">{description}</Typography>
            </div>
            </Button>}
        </div>
    );
}

