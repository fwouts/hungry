import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const SearchBar = (props: {
  search: string;
  updateSearch(search: string): void;
}) => {
  const handleSearchInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => props.updateSearch(event.target.value);

  return (
    <div className="bg-white flex items-center rounded shadow-xl focus-within:ring ring-red-400">
      <input
        className="rounded-l-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        type="text"
        id="search"
        placeholder="Search"
        value={props.search}
        onChange={handleSearchInputChange}
      />
      <div className="text-red-700 rounded-full p-2 w-9 h-9">
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
};
