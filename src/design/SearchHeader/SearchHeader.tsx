import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";

export const SearchHeader = (props: {
  search: string;
  updateSearch(search: string): void;
}) => {
  return (
    <>
      <h1 className="bg-red-600 text-white text-lg font-extralight pt-3 px-5">
        Pick a restaurant
      </h1>
      <div className="p-2 bg-gradient-to-b from-red-600 to-red-700">
        <SearchBar {...props} />
      </div>
    </>
  );
};
