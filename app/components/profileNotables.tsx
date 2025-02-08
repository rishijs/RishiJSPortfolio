import { Link, Typography } from "@mui/material";
import Image from "next/image";

export default async function ProfileNotables() {
    let loadingText = "Loading...";
    let githubContent: string[] = [];
    let loaded: boolean = false;

    try {
        githubContent = await fetchGithubData();
        loaded = true;
    } catch (error) {
        console.error(error);
        loadingText = "Failed to load README.";
    }

    return (
        <div className="grid grid-cols-1 gap-2 text-white rounded-lg shadow-lg">
            <Link
                className="text-white! !text-sm flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://linkedin.com/in/rishij02"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image aria-hidden src="/linkedin.png" alt="RishiJ02 linkedin" width={16} height={16} />
                Linkedin
            </Link>

            <Link
                className="text-white! !text-sm  flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://sevadusk.itch.io"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image aria-hidden src="/itch.png" alt="Sevadusk itch.io" width={16} height={16} />
                Itch.io
            </Link>

            <Link
                className="text-white! !text-sm flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://rishijs.github.io"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image aria-hidden src="/git.png" alt="threeJS" width={16} height={16} />
                threeJET
            </Link>

            <Link
                className="text-white! !text-sm  flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://github.com/rishijs"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image aria-hidden src="/git.png" alt="RishiJS github" width={16} height={16} />
                Github
            </Link>

            <div className="text-sm">
                
            {!loaded ? loadingText : githubContent[1]}

            {loaded && (
                <div className="flex items-center gap-2">
                    <Image
                        src={githubContent[0]}
                        alt="RishiJS GitHub Avatar"
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                    <a className="text-lg">{githubContent[2]}</a>
                </div>
            )}


            </div>
        </div>
    );
}

async function fetchGithubData() {
    const username = "rishijs";

    const response = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
            method: "GET"
        },
    });

    if (!response.ok) throw new Error("Failed to fetch github data");

    const data = await response.json();
    return [data.avatar_url, data.bio, data.login];
}
