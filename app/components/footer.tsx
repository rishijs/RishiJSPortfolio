import { Link, Typography } from "@mui/material";
import Image from "next/image";

export default function Footer() {
    return(
        <footer className="flex gap-6 flex-wrap items-center justify-center mb-4">
            <Link
            className="text-white! flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://linkedin.com/in/rishij02"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
                aria-hidden
                src="/linkedin.png"
                alt="RishiJ02 linkedin"
                width={16}
                height={16}
            />
            Linkedin
            </Link>

            <Link
            className="text-white! flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/rishijs"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
                aria-hidden
                src="/git.png"
                alt="RishiJS github"
                width={16}
                height={16}
            />
            Github
            </Link>

            <Link
            className="text-white! flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://sevadusk.itch.io"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
                aria-hidden
                src="/itch.png"
                alt="Sevadusk itch.io"
                width={16}
                height={16}
            />
            Itch.io Game Portfolio
            </Link>

            <Link
            className="text-white!  flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://rishijs.github.io"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
                aria-hidden
                src="/git.png"
                alt="threeJS"
                width={16}
                height={16}
            />
            threeJET
            </Link>
        </footer>
    );
}