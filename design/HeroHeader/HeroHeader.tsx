import { ChevronLeftIcon } from "@heroicons/react/outline";
import { setupPreviews } from "@previewjs/plugin-react/setup";
import Link from "next/link";
import React from "react";
import { RESTAURANT_LIST } from "../../data";

export interface HeroHeaderProps {
  title: string;
  photoUrl: string;
}

export const HeroHeader = (props: HeroHeaderProps) => {
  return (
    <div
      className="text-white text-lg pt-4 pb-32 flex flex-row items-center bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(hsla(0, 0%, 40%, 0.2), hsla(0, 0%, 0%, 0.4)), url('${props.photoUrl}')`,
      }}
    >
      <Link href="/">
        <a className="w-10 px-2">
          <ChevronLeftIcon />
        </a>
      </Link>
      <h1>{props.title}</h1>
    </div>
  );
};

export default HeroHeader;

setupPreviews(HeroHeader, {
  default: {
    title: "Restaurant name",
    photoUrl: RESTAURANT_LIST[0].photoUrl,
  },
});
