import React from "react";
import Image from "next/image";
import { IProject } from "@/app/projects/page";
import { FaCodeBranch } from "react-icons/fa6";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <div className="mx-auto mt-2 max-w-3xl px-6 lg:px-8 group mb-2 ">
      <div className="mt-16 flow-root sm:mt-24 group-hover:scale-110 transition-all duration-200 ">
        <div className="-m-2 rounded-xl bg-gray-900/5 p-4 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl group lg:flex space-y-1 items-center shadow-lg ">
          <div className="w-60 h-44 relative col-start-1">
            <Image
              src={project.img}
              alt={project.name}
              placeholder="blur"
              blurDataURL={project.img}
              fill
              quality={100}
              className="rounded-md bg-white shadow-2xl object-cover ring-1 ring-gray-900/10 hover:brightness-90 "
            />
          </div>
          <div className="lg:ml-4 col-start-2 text-wrap space-y-2">
            <h3 className="text-lg font-bold ">{project.name}</h3>
            <h4 className="text-sm font-semibold">{project.description}</h4>
            <div className="flex gap-5 ">
              <Link href={project.codebase} target="_blank" className="">
                <Button variant={"ghost"}>
                  <FaCodeBranch className="inline mr-2 text-blue-500" />
                  codebase
                </Button>
              </Link>

              <Link href={project.live} target="_blank" className="">
                <Button
                  variant={"destructive"}
                  className="font-medium tracking-wide "
                >
                  <div className="w-2 h-2 rounded-full animate-pulse mr-2 bg-white" />
                  live
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.techStacks.map((tags, _idx) => (
                <p key={_idx} className="grainy py-1 px-2 text-xs rounded-sm">
                  {tags}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
