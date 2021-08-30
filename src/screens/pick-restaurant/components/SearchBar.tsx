import { SearchIcon } from "@heroicons/react/outline";
import React from "react";

export const RestaurantSearchBar = (props: {
  search: string;
  updateSearch(search: string): void;
}) => {
  const handleSearchInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => props.updateSearch(event.target.value);

  return (
    <div className="bg-white flex items-center rounded-xl shadow-xl">
      <input
        className="rounded-l-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        type="text"
        id="search"
        placeholder="Search"
        value={props.search}
        onChange={handleSearchInputChange}
      />
      <div className="p-1">
        <button className="text-red-700 rounded-full p-2 hover:bg-red-200 focus:outline-none w-8 h-8 flex items-center justify-center">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};
