import EventCard from "./eventCard";
import {LinkProps} from "./eventCard"
import Typography from "@mui/material/Typography";


const events:Array<LinkProps> = [ 
{name: "Shrouded Labyrinth", link:"https://sevadusk.itch.io/shrouded-labyrinth", image:"/projecticons/shrouded_labyrinth.png"},
{name: "Tarnished Tower Defense", link:"https://sevadusk.itch.io/tarnished-tower-defense", image:"/projecticons/tarnished.png"},
{name: "Lost Heart", link:"https://sevadusk.itch.io/lostheart", image:"/projecticons/lost_heart.png"},
{name: "Night's Bastion", link:"https://sevadusk.itch.io/nights-bastion", image:"/projecticons/nights_bastion.png"},
{name: "Hellevator", link:"https://sevadusk.itch.io/hellevator", image:"/projecticons/hellevator.png"},
{name: "Necroform",  link:"https://sevadusk.itch.io/necroform", image:"/projecticons/necro_form.png"},
{name: "Hexsmith",  link:"https://sevadusk.itch.io/hexsmith", image:"/projecticons/hexsmith.png"},
{name: "Wings of Wrath", link:"https://sevadusk.itch.io/wings-of-wrath", image:"/projecticons/wings_of_wrath.png"},
{name: "Honorbound", link:"https://sevadusk.itch.io/wings-of-wrath", image:"/projecticons/honorbound.png"},
{name: "Shades Of Self", link:"https://sevadusk.itch.io/shades-of-self", image:"/projecticons/shades_of_self.png"},
{name: "Eternal Harvest", link:"https://sevadusk.itch.io/eternal-harvest", image:"/projecticons/eternal_harvest.png"},
{name: "Project Astra", link:"https://sevadusk.itch.io/project-astra", image:"/projecticons/project_astra.jpg"},
]


export default function Events(){
    return(
        <div>
            <div className="w-full">
              {/*<Typography className="text-lg text-center font-bold pb-4">Other Notable Projects</Typography>*/}
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