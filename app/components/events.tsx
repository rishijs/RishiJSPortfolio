import EventCard from "./eventCard";
import {LinkProps} from "./eventCard"
import Typography from "@mui/material/Typography";


const events:Array<LinkProps> = [ 
{name: "Hackathon", description: "Hackathon description", link:"#", image:"favicon.ico"},
{name: "Game Jam", description: "Game Jam description", link:"#", image:"favicon.ico"},
{name: "Game Jam", description: "Game Jam description", link:"#", image:"favicon.ico"},
{name: "Game Jam", description: "Game Jam description", link:"#", image:"favicon.ico"},
{name: "Game Jam", description: "Game Jam description", link:"#", image:"favicon.ico"},
{name: "Game Jam", description: "Game Jam description", link:"#", image:"favicon.ico"},
]


export default function Events(){
    return(
        <div>
            <div className="w-full">
              <ul
                className="grid grid-cols-3 gap-2"
              >
                {events.map((item: LinkProps) => {
                  const {name, description, link, image} = item;
                  return (
                    <li key={name} className="bg-black text-black border border solid border-white">
                      <EventCard name={name} link={link} image={image} className="text-black"/>
                    </li>
                  );
                })}
              </ul>
            </div>
        </div>
    );
}