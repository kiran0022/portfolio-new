import React from "react";

export default function AboutBoard() {
  return (
    <div className="space-y-5">
      <h2 className="text-2xl p-3 font-bold">Experience</h2>
      <div className="rounded-lg p-4 shadow-xl transition-all duration-700 grainy animate-[shimmer_2s_1] ">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl  font-bold text-blue-700 tracking-wide">
            Software Developer Intern
          </h2>
          <p className="text-gray-500 text-wrap leading-7 tracking-wide">
            Build webapp from scrath for client on data warehouse concept.
            Designed and implemented on NextJs(app router) with MongoDB and
            Zustand used for state management accoss routes.
            <br />
            <span className="text-black">Functionalities: </span>
            Admin dashboard, review details, data visualisation, upload, kyc
            document, inventory and shipping details.
          </p>
        </div>
      </div>
      <h2 className="text-2xl p-3 font-bold">Education</h2>
      <div className=" rounded-lg p-4 shadow-lg transition-all duration-700 grainy animate-[shimmer_2s_1]">
        <div className="flex flex-col gap-2 space-y-1">
          <h2 className="text-xl font-bold text-blue-700">
            B.E. Computer Science
          </h2>
          <p className="text-gray-600 text-wrap leading-8 tracking-wide">
            Global institute of engineering and technology.
            <p className="text-black">
              CGPA - 8.6 <span className="text-2xl text-gray-400">|</span> 2019
              - 2023
            </p>
          </p>
        </div>
      </div>

      <div></div>
    </div>
  );
}
