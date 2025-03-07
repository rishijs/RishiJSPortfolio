import Image from "next/image";
import Link from "next/link";
import Skills from "./skills";
import GithubProfile from "./githubProfile";
import ProfileNotables from "./profileNotables";

export default async function Profile() {
  const pdfUrl = "/resume.pdf";

  return (
    <div className="grid gap-2 grid-cols-1">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xl md:text-2xl font-semibold tracking-tighter items-center">
            <div className="flex flex-col items-center md:items-start">
                <h2 className="mb-2">
                    {`Rishi Jammalamadaka, rishi.rjsd@gmail.com`}
                </h2>
                <Link
                    href="/resume.pdf"
                    target="_blank"
                    className="text-center border border-solid border-white bg-foreground h-fit w-48 hover:!bg-red-500 p-2"
                >
                    View Resume
                </Link>
            </div>

            <div className="flex justify-center">
                <img src="/rishi4.jpg" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full" />
            </div>

            <div className="h-fit flex justify-center md:justify-start">
                <ProfileNotables />
            </div>
        </div>

        
        <h1 className="mb-4">
            {/*`Full Stack Developer & Jack of All Trades`*/}
            <br/> 
            {`B.S. Computer Science Graduate `}
            <a 
                href="https://newbrunswick.rutgers.edu/?utm_source=rutgers.edu&utm_medium=web&utm_campaign=uwide_sliver_new" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
            >
             @Rutgers New Brunswick
            </a>
            <br/> 
            {`Working on Freelance Projects and looking for Full Time Roles`} 
        </h1>

        <div className="mb-4">
            <GithubProfile/>
        </div>

        <Skills/>
        
    </div>
  );
}