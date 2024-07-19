import React from "react";

export default function AboutBoard() {
  return (
    <div className="space-y-5 px-4">
      <h2 className="text-2xl px-1 font-bold">Experience</h2>
      <div className="rounded-lg p-4 shadow-xl transition-all duration-700 grainy animate-[shimmer_2s_1] ">
        <div className="flex flex-col gap-2">
          <div className="lg:flex space-y-2 lg:space-y-0 justify-between">
            <h2 className="text-xl  font-bold text-blue-700 tracking-wide">
              Software Engineer
            </h2>
            <h2>Mar 2024 - Present</h2>
          </div>
          <div className="text-gray-500 text-wrap leading-7 tracking-wide">
            Enhancing site performance through code optimization and advanced
            SEO strategies. I was part of modernizing the company&apos;s main
            domain web platform using cutting-edge technologies aligned with
            current industry standards considering leveraged frameworks
            conducive to scalability and efficiency, ensuring our digital
            presence remained robust and responsive. Additionally, I led the
            development of tailored projects for diverse audiences, and serving
            a substantial daily user base.
            <br />
            <br />
            <span className="text-black font-medium">Tools handled: </span>
            Suite CRM | Docker | AWS S3 | Payload CMS | Next.js | TypeScript |
            Postman | Jenkins to deliver comprehensive solutions effectively.
          </div>
        </div>
      </div>
      <div className="rounded-lg p-4 shadow-xl transition-all duration-700 grainy animate-[shimmer_2s_1] ">
        <div className="flex flex-col gap-2">
          <div className="lg:flex space-y-2 lg:space-y-0 justify-between">
            <h4 className="text-xl  font-bold text-blue-700 tracking-wide">
              Software Developer Intern
            </h4>

            <h4>Aug 2023 - Oct 2023</h4>
          </div>
          <div className="text-gray-500 text-wrap leading-7 tracking-wide">
            Build webapp from scrath for client on data warehouse concept.
            Designed and implemented on NextJs(app router) with MongoDB and
            Zustand used for state management accoss routes.
            <br />
            <br />
            <span className="text-black font-medium">Functionalities: </span>
            Admin dashboard, review details, data visualisation, upload, kyc
            document, inventory and shipping details.
          </div>
        </div>
      </div>

      <h2 className="text-2xl p-3 font-bold">Education</h2>
      <div className=" rounded-lg p-4 shadow-lg transition-all duration-700 grainy animate-[shimmer_2s_1]">
        <div className="flex flex-col gap-2 space-y-1">
          <h2 className="text-xl font-bold text-blue-700">
            B.E. Computer Science
          </h2>
          <div className="text-gray-600 text-wrap leading-8 tracking-wide">
            Global institute of engineering and technology.
            <div className="text-black">
              CGPA - 8.6 <span className="text-2xl text-gray-400">|</span> 2019
              - 2023
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
