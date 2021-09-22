import { ChevronLeftIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";

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
      <Link to="/" className="w-10 px-2">
        <ChevronLeftIcon />
      </Link>
      <h1>{props.title}</h1>
    </div>
  );
};
