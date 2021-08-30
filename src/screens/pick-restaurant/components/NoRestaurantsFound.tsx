import { BanIcon } from "@heroicons/react/outline";
import React from "react";
import { ReactComponent as NotFoundImage } from "./undraw_not_found_60pq.svg";

export const NoRestaurantsFound = (props: { searchTerm: string }) => {
  return (
    <div className="p-4">
      <NotFoundImage className="p-4 mx-auto w-2/3 h-auto object-contain" />
      <div className="flex flex-row justify-center items-center text-lg gap-2 p-4">
        <div className="w-8 text-gray-500">
          <BanIcon />
        </div>
        <div className="text-gray-700">
          {props.searchTerm ? (
            <>
              No restaurants match <b>"{props.searchTerm}"</b>
            </>
          ) : (
            <>No restaurants are available.</>
          )}
        </div>
      </div>
    </div>
  );
};
