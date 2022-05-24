import { SearchBar } from "../SearchBar/SearchBar";

export const SearchHeader = (props: {
  search: string;
  updateSearch(search: string): void;
}) => {
  return (
    <>
      <h1 className="bg-red-600 text-white text-xl font-semibold pt-4 pb-2 px-5">
        Pick a restaurant
      </h1>
      <div className="px-3 pb-3 bg-gradient-to-b from-red-600 to-red-700">
        <SearchBar {...props} />
      </div>
    </>
  );
};
