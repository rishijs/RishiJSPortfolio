import ProjectCard from "./fetchedProjectCard";
import {LinkProps} from "./fetchedProjectCard"
import Typography from "@mui/material/Typography";

export default async function GameProjects(){
    let fetchedGames: Array<LinkProps> = [];
    let error: string | null = null;

    try {
        fetchedGames = await fetchPublicItchGames();
    } catch (e) {
        console.error(e);
        error = "Failed to load public games from itch.io";
    }

    return(
        <div>
            <div className="w-full">
              {error && <Typography className="text-red-500 text-center">{error}</Typography>}
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {fetchedGames.map((item: LinkProps) => {
                  return (
                    <li key={item.name} className="h-full">
                      <ProjectCard {...item} />
                    </li>
                  );
                })}
              </ul>
            </div>
        </div>
    );
}

async function fetchPublicItchGames(): Promise<Array<LinkProps>> {
    const username = "sevadusk";
    const response = await fetch(`https://itch.io/games/newest/by-${username}.xml`, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        },
        next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch itch.io RSS feed: ${response.status} ${response.statusText}`);
    }

    const xmlText = await response.text();
    
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const titleRegex = /<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/;
    const linkRegex = /<link>([\s\S]*?)<\/link>/;
    const imageRegex = /<description>[\s\S]*?src="(.*?)"/;
    const descriptionRegex = /<description>[\s\S]*?<!\[CDATA\[([\s\S]*?)\]\]>[\s\S]*?<\/description>/;

    const matches = Array.from(xmlText.matchAll(itemRegex));
    
    return matches.map(match => {
        const content = match[1];
        const fullTitle = content.match(titleRegex)?.[1] || "Unknown Game";
        const link = content.match(linkRegex)?.[1] || "#";
        const image = content.match(imageRegex)?.[1] || "/itch.png";
        
        const rawDescription = content.match(descriptionRegex)?.[1] || "";
        
        // Strip HTML tags and clean whitespace for a clean text summary
        let description = rawDescription.replace(/<[^>]*>?/gm, '').trim();

        // Separate game title from platform/meta tags in brackets
        const bracketIndex = fullTitle.indexOf('[');
        let name = fullTitle;
        let tags = "";

        if (bracketIndex !== -1) {
            name = fullTitle.substring(0, bracketIndex).trim();
            tags = fullTitle.substring(bracketIndex).trim();
        }

        if (tags) {
            description = description ? `${tags} - ${description}` : tags;
        }
        
        return { name, link, image, description };
    });
}