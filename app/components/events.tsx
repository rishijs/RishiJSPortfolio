import EventCard from "./eventCard";
import {LinkProps} from "./eventCard"
import Typography from "@mui/material/Typography";


const events:Array<LinkProps> = [ 
{name: "Shrouded Labyrinth", link:"https://sevadusk.itch.io/shrouded-labyrinth", image:"/itch.png"},
{name: "Tarnished Tower Defense", link:"https://sevadusk.itch.io/tarnished-tower-defense", image:"/itch.png"},
{name: "Lost Heart", link:"https://sevadusk.itch.io/lostheart", image:"/itch.png"},
{name: "Night's Bastion", link:"https://sevadusk.itch.io/nights-bastion", image:"/itch.png"},
{name: "Spectral War", link:"https://xandruher.itch.io/spectral-war", image:"/itch.png"},
{name: "Hellevator", link:"https://sevadusk.itch.io/hellevator", image:"/itch.png"},
{name: "Necroform",  link:"https://sevadusk.itch.io/necroform", image:"/itch.png"},
{name: "Hexsmith",  link:"https://sevadusk.itch.io/hexsmith", image:"/itch.png"},
{name: "Wings of Wrath", link:"https://sevadusk.itch.io/wings-of-wrath", image:"/itch.png"},
]


export default function Events(){
    return(
        <div>
            <div className="w-full">
              <Typography className="text-lg text-center font-bold pb-4">Other Notable Game Jams</Typography>
              <ul
                className="grid grid-cols-3 gap-2"
              >
                {events.map((item: LinkProps) => {
                  const {name, link, image} = item;
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