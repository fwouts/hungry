import { ChevronLeftIcon } from "@heroicons/react/outline";
import { setupPreviews } from "@previewjs/plugin-react/setup";
import Link from "next/link";
import { RESTAURANT_LIST } from "../../data";

export interface HeroHeaderProps {
  title: string;
  photoUrl: string;
}

export const HeroHeader = (props: HeroHeaderProps) => {
  return (
    <div
      className="text-white text-xl font-semibold pb-32 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url('${props.photoUrl}')`,
      }}
    >
      <div className="bg-gray-800 bg-opacity-60 flex flex-row items-center py-4">
        <Link href="/">
          <a className="w-10 mx-3 p-2 text-sm bg-gray-200 text-black rounded-full hover:bg-white">
            <ChevronLeftIcon />
          </a>
        </Link>
        <h1>{props.title}</h1>
      </div>
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
