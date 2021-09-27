import { BanIcon } from "@heroicons/react/outline";
import React from "react";
import { ReactComponent as NotFoundImage } from "./undraw_not_found_60pq.svg";

export const NoMatch = (props: { message: React.ReactNode }) => {
  return (
    <div className="p-4">
      <NotFoundImage className="p-4 mx-auto w-2/3 h-auto max-w-sm object-contain" />
      <div className="flex flex-row justify-center items-center text-lg gap-2 p-4">
        <div className="w-8 text-gray-500">
          <BanIcon />
        </div>
        <div className="text-gray-700">{props.message}</div>
      </div>
    </div>
  );
};
