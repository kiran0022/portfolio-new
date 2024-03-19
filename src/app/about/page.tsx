import React from "react";

import { cn } from "@/lib/utils";
import Animate from "@/components/Animate";
import AboutBoard from "@/components/AboutBoard";
export default function page() {
  const skills = [
    "Next Js",
    "React Js",
    "Typescript",
    "Javascript",
    "Zustand",
    "Tailwind CSS",
    "Rest API",
    "Html 5",
    "Css 3",
    "Supabase",
    "Mongo DB",
    "Github",
    "Figma",
    "Material UI",
    "Shadcn",
    "Python",
  ];
  return (
    <div className="max-w-4xl h-[90vh] mx-auto overflow-y-hidden">
      <div className="mt-6 ">
        <AboutBoard />

        <div className="space-y-5">
          <h2 className="text-2xl p-3 font-bold">Tech-stacks</h2>
          <div className="flex gap-5 ms-5 max-w-4xl justify-stretch flex-wrap">
            {skills.map((skill, _idx) => (
              <p
                key={_idx}
                className={cn(
                  "skillTool",
                  " hover:scale-110 hover:brightness-110 hover:backdrop-brightness-105 hover:outline-none outline-double transition-all duration-200"
                )}
              >
                {skill}
              </p>
            ))}
          </div>
        </div>

        {/* <Animate /> */}
      </div>
    </div>
  );
}
