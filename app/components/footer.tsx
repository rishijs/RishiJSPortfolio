import { Typography } from "@mui/material";
import Image from "next/image";
import ProfileFooter from "./profileFooter";

export default function Footer() {
    return(
        <footer className="flex gap-6 flex-wrap items-center justify-center mb-4">
            <ProfileFooter/>
        </footer>
    );
}