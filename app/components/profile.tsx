import Image from "next/image";
import Link from "next/link";
import Skills from "./skills";
import ProfileFooter from "./profileFooter";

export default function Profile() {
  const pdfUrl = "/resume.pdf";

  return (
    <div className="grid gap-2 grid-cols-1">
        <div className="grid grid-cols-3 text-2xl font-semibold tracking-tighter">
            <div className="grid grid-cols-1">
                <h2 className="mb-2">
                    {`Rishi Jammalamadaka, rishi.rjsd@gmail.com`}
                </h2>
                <Link href="/resume.pdf" target="_blank">
                    <button
                    className="border border-solid border-white bg-foreground w-48 hover:!bg-red-500">
                    View Resume
                    </button>
                </Link>
            </div>
            <img src="/rishi1.jpg" className="ml-12 w-fit h-fit"/>
        </div>
        
        <h1 className="mb-4">
            {`Full Stack Developer & Jack of All Trades`}
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
            <ProfileFooter/>
        </div>
        <Skills/>
        
    </div>
  );
}