import ProjectCard from "./fetchedProjectCard";
import {LinkProps} from "./fetchedProjectCard"
import Typography from "@mui/material/Typography";

export default async function SoftwareProjects(){
    let fetchedProjects: Array<LinkProps> = [];
    let error: string | null = null;

    try {
        fetchedProjects = await fetchGithubRepos();
    } catch (e) {
        console.error(e);
        error = "Failed to load projects from GitHub";
    }

    return(
        <div>
            <div className="w-full">
              {error && <Typography className="text-red-500 text-center">{error}</Typography>}
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {fetchedProjects.map((item: LinkProps) => {
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

async function fetchGithubRepos(): Promise<Array<LinkProps>> {
    const username = "rishijs";
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
        next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) throw new Error("Failed to fetch repositories from GitHub");

    const data = await response.json();
    return data.map((repo: any) => ({
        name: repo.name,
        link: repo.html_url,
        image: "/git.png",
        description: repo.description,
    }));
}