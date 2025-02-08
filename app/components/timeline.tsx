import React from "react";
import SkillCard, { SkillProps } from "./skillCard";

const Timeline = ({ items }) => {
  return (
    <div className="relative mx-auto w-full">

      <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 transform -translate-x-1/2"></div>

      {items.map((item, index) => (
        <div key={index} className={`relative flex items-center w-full my-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>

          <div className="absolute left-1/2 w-4 h-4 bg-black rounded-full transform -translate-x-1/2"></div>

          <div className={`w-5/12 p-4 bg-black shadow-md border border-solid border-white ${index % 2 === 0 ? "text-right" : "text-left"}`}>
            <time className="block text-sm font-bold text-white">{item.date}</time>
            <p className="text-white text-xs">{item.description}</p>
            <div className="flex flex-col">
              <ul
                className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}
              >
                {item.cards.map((item: SkillProps) => {
                  const name = item.name;
                  return (
                    <li key={name} className="bg-black text-black border border solid border-white">
                      <SkillCard name={name} className="text-black"/>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>


        </div>
      ))}
    </div>
  );
};

export default Timeline;