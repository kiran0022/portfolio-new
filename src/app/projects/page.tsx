import ProjectCard from "@/components/ProjectCard";
import React from "react";

export type IProject = {
  name: string;
  description?: string;
  img: string;
  techStacks: string[];
  codebase: string;
  live: string;
};

enum S {
  Nextjs = "Next Js",
  Reactjs = "React Js",
  Typescript = "Typescript",
  Javascript = "Javascript",
  Zustand = "Zustand",
  TailwindCSS = "Tailwind CSS",
  RestAPI = "Rest API",
  Html = "Html 5",
  Css = "Css 3",
  Supabase = "Supabase",
  MongoDB = "Mongo DB",
  Daisy = "Daisy UI",
  Sbrealtime = "Supabase Realtime",
  Markdown = "Markdown CMS",
  Nextauth = "NextAuth",
  Sbauth = "Supabase Auth",
  Api = "API",
  Oauthgit = "OAuth-Github",
  Oauthgoo = "OAuth-Google",
  Resnd = "Resend",
}

export default function page() {
  const card: IProject[] = [
    {
      name: "Blog",
      description:
        "Users shares to world like snippets, code's, articles, essay, tech-content, sports etc.,",
      img: "/project/blog.png",
      techStacks: [
        S.Nextjs,
        S.Supabase,
        S.TailwindCSS,
        S.Typescript,
        S.Zustand,
        S.Sbauth,
      ],
      codebase: "https://github.com/kiran0022/blog/",
      live: "https://blog-tan-sigma.vercel.app/",
    },

    {
      name: "Chat",
      description:
        "Chat app for closed connect's with supabase realtime and auth features",
      img: "/project/chatApp.png",
      techStacks: [
        S.Nextjs,
        S.Supabase,
        S.TailwindCSS,
        S.Sbrealtime,
        S.Typescript,
        S.Zustand,
        S.Sbauth,
      ],
      codebase: "https://github.com/kiran0022/chat",
      live: "https://chat-supabase-realtime.vercel.app/",
    },
    {
      name: "Digital clock",
      img: "/project/clockCss.png",
      description: "Simple JS and Html/Css digital clock",
      techStacks: [S.Html, S.Css, S.Javascript],
      codebase: "https://github.com/kiran0022/analog-digi-clock",
      live: "https://analog-digi-clock.netlify.app/",
    },
    {
      name: "RoboHash API",
      img: "/project/daisyROBOhash.png",
      description: "",
      techStacks: [S.Html, S.Css, S.Javascript, S.Api, S.Daisy],
      codebase: "https://github.com/kiran0022/DaisyUI_nextJS_tut",
      live: "https://daisy-ui-next-js-tutorial.vercel.app/users",
    },
    {
      name: "OpenInApp",
      img: "/project/openinapptask.png",
      description:
        "Assignment task to create login and signup feauture for various OAuth users",
      techStacks: [S.Reactjs, S.TailwindCSS, S.Oauthgit, S.Oauthgoo],
      codebase: "https://github.com/kiran0022/openinapp_task",
      live: "https://openinapp-task.vercel.app/",
    },
    {
      name: "ImageGallary",
      img: "/project/imageGalaery.png",
      description:
        " Image gallery to fetch images from Pexels api image with enamorus amount of data",
      techStacks: [S.Html, S.Css, S.Javascript, S.Api, S.Daisy],
      codebase: " https://github.com/kiran0022/ImageGallery",
      live: "https://image-galleryview.netlify.app/",
    },
    {
      name: "CRUD",
      img: "/project/crud.png",
      description: "Basic create, read, update, delete operation with reactjs",
      techStacks: [S.Html, S.Css, S.Javascript, S.Api, S.Daisy],
      codebase: "https://github.com/kiran0022/CRUD-functionality",
      live: "https://crud-functionality.vercel.app/",
    },
    {
      name: "User Access",
      img: "/project/nextauthRole.png",
      description:
        "Role based authentication for users and display content based on the roles using next auth ",
      techStacks: [S.TailwindCSS, S.Typescript, S.Api],
      codebase: "https://github.com/kiran0022/Blackbox",
      live: "/maintainance",
    },
    {
      name: "Data warehouse",
      img: "/project/nextlomintern.png",
      description:
        "Admin dashboard, product details, review details, kyc and shipping details. Stored all data's in mongodb",
      techStacks: [S.TailwindCSS, S.Nextjs, S.RestAPI, S.MongoDB],
      codebase: "https://github.com/kiran0022/next_lom_intern",
      live: "/maintainance",
    },
    {
      name: "OTP Access",
      img: "/project/otp.png",
      description:
        "Email otp based login system. Mail sending through Resend API system",
      techStacks: [S.Reactjs, S.Resnd, S.TailwindCSS, S.Api],
      codebase: "https://github.com/kiran0022/proacure_task",
      live: "/maintainance",
    },
  ];

  return (
    <div className="h-[90vh] max-w-5xl ">
      <div className="h-[100%] overflow-y-scroll scrollbar-track-blue-lighter scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-w-2 scroll-my-28 scroll-ms-40 mb-3 scroll-smooth ">
        {card.map((project, _idx) => (
          <>
            <ProjectCard key={_idx} project={project} />
          </>
        ))}
      </div>
    </div>
  );
}
