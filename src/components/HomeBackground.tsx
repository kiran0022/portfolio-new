import React from "react";
import background from "../../public/images/background.png";
import Image from "next/image";
export default function HomeBackground() {
  return (
    <Image
      src={background}
      fill
      alt="bg"
      className="backdrop-blur-2xl blur-xl"
      style={{
        objectFit: "cover",
        zIndex: -5,
      }}
    />
  );
}
