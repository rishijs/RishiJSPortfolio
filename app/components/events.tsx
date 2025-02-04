import EventCard from "./eventCard";
import {LinkProps} from "./eventCard"
import Typography from "@mui/material/Typography";


const events:Array<LinkProps> = [ 
{name: "Hackathon", description: "Hackathon description", link:"#"},
{name: "Game Jam", description: "Game Jam description", link:"#"},
{name: "Game Jam", description: "Game Jam description", link:"#"},
{name: "Game Jam", description: "Game Jam description", link:"#"},
{name: "Game Jam", description: "Game Jam description", link:"#"},
{name: "Game Jam", description: "Game Jam description", link:"#"},
]


export default function Events(){
    return(
        <div>
            <div className="w-full h-24">
              <ul
                className="grid grid-cols-3 gap-2"
              >
                {events.map((item: LinkProps) => {
                  const name = item.name;
                  return (
                    <li key={name} className="bg-black text-black border border solid border-white">
                      <EventCard name={name} className="text-black"/>
                    </li>
                  );
                })}
              </ul>
            </div>
        </div>
    );
}