"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import logo from "../../public/images/Group 3.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="pt-4 px-2">
      <div className="max-w-7xl flex justify-between lg:p-2 bg-white/20  rounded-lg shadow-xl items-center backdrop-blur-sm sticky  ">
        <>
          <Link href={"/"}>
            <Image
              src={logo}
              alt={"logo"}
              quality={100}
              className="ml-5 w-14 p-2 dark:text-white stroke-transparent"
            />
          </Link>
        </>
        <div className="flex gap-3 lg:gap-9 items-center">
          <Link
            href={"/about"}
            className={cn(
              "font-medium",
              pathname === "/about"
                ? "font-semibold underline underline-offset-4"
                : "font-light"
            )}
          >
            About
          </Link>

          <Link
            href={"/projects"}
            className={cn(
              "font-medium",
              pathname === "/projects"
                ? "font-semibold underline underline-offset-4"
                : "font-light"
            )}
          >
            Projects
          </Link>
          <Button variant={"outline"} className="mr-5 hover:font-semibold">
            <a href="/KiranKumar-Resume.pdf" target="_blank">
              Resume
            </a>
          </Button>

          {/* <Button variant={"outline"} className="mr-5">
          Contact
        </Button> */}
          {/* <ThemeToggle /> */}
        </div>
      </div>
    </nav>
  );
}
