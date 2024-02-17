"use client";
import lottiJson from "../../../public/lottie.json";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";

export default function page() {
  return (
    <div className="max-w-5xl ">
      <Lottie
        loop
        play
        animationData={lottiJson}
        className="mx-auto"
        style={{ width: 450, height: 450 }}
      />

      <h1 className="text-7xl text-center items-center mx-auto font-extrabold">
        Site under maintainance !
      </h1>
    </div>
  );
}
