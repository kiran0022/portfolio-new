import Image from "next/image";
import React from "react";
import background from "../../public/images/background.png";

import Animate from "./Animate";
import { BsLinkedin, BsPhone } from "react-icons/bs";
import { FaLinkedin, FaLocationPin, FaXTwitter } from "react-icons/fa6";
import {
  FaGithub,
  FaInstagram,
  FaPhone,
  FaTwitterSquare,
} from "react-icons/fa";
import { MdEmail, MdLocationPin, MdMail } from "react-icons/md";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
export default function Home() {
  return (
    <div className=" h-[90vh] lg:grid flex flex-col justify-around grid-rows-3 lg:justify-center items-center lg:grid-cols-3  ">
      <div className="flex lg:col-span-2 space-x-10 lg:ms-40 ms-5 mt-4 w">
        <p>
          <FaLinkedin className="w-12 h-12 rounded-xl" />
        </p>
        <p>
          <FaGithub className="w-12 h-12 " />
        </p>
        <p>
          <FaXTwitter className="w-12 h-12" />
        </p>
        <p>
          <FaInstagram className="w-12 h-12" />
        </p>
      </div>

      <div className="isolate aspect-video min-w-max rounded-xl bg-white/20 shadow-lg backdrop-blur-sm ring-1 ring-black/5 lg:col-start-2 row-start-2 text-wrap col-start-1 m-4 lg:m-0 items-center">
        <div className="space-y-5 m-6">
          <h1 className="lg:text-4xl text-2xl font-extrabold space-y-2">
            <p className="">Hi 👋🏽</p>
            <p className="">
              I&apos;m <span className="text-blue-600/80">Kiran Kumar</span>
            </p>
          </h1>
          <h2 className="">Software Developer</h2>
        </div>
      </div>

      <div className="row-start-3 col-start-1 ms-5 w-max">
        <h3 className="font-semibold">Address</h3>
        <div className="ms-4 mt-1 space-y-1">
          <p>
            <span className="flex items-center">
              <MdLocationPin className="mr-2 inline" /> Vellore Tamilnadu, IN
            </span>
          </p>
          <p className="flex items-center">
            <span className="">
              <MdMail className="inline mr-2" />
            </span>
            kirankumar22tech@gmail.com
          </p>
          <p className="flex items-center">
            <span>
              <FiPhoneCall className="mr-2" />
            </span>
            <span className="mr-1">(+91)</span>7010252064
          </p>
        </div>
      </div>
    </div>
    // <Animate />s
  );
}
