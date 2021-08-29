import { SearchIcon } from "@heroicons/react/outline";
import { useAtom } from "jotai";
import React from "react";
import { PickRestaurantState } from "./PickRestaurantState";

export const RestaurantSearchBar = (props: { state: PickRestaurantState }) => {
  const [search, setSearch] = useAtom(props.state.searchAtom);

  const handleSearchInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => setSearch(event.target.value);

  return (
    <div className="bg-white flex items-center rounded-xl shadow-xl">
      <input
        className="rounded-l-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        type="text"
        placeholder="Search"
        value={search}
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
