import DataCard from "./dataCard";
import {Props} from "../components/dataCard"
import Typography from "@mui/material/Typography";

export enum CardType {
    Basic = 0,
    Description = 1,
    Link = 2,
    Image = 3
  }



const skills:Array<Props> = [ 
    {name: "Skill1"},
    {name: "Skill2"},
    {name: "Skill3"},
    {name: "Skill4"},
    {name: "Skill5"},
    {name: "Skill6"},
    {name: "Skill7"}
  ]


export default function Skills(){
    return(
        <div>
            <div className="flex flex-col">
              <Typography className="text-black">Skills</Typography>
              <ul
                className="flex flex-wrap gap-2"
              >
                {skills.map((item: Props) => {
                  const name = item.name;
                  return (
                    <li key={name} className="bg-slate-800">
                      <DataCard name={name} card_type={CardType.Basic} className="text-black"/>
                    </li>
                  );
                })}
              </ul>
            </div>
        </div>
    );
}