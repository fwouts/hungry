import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setupPreviews } from "@previewjs/plugin-react/setup";
import Link from "next/link";
import { RESTAURANT_LIST } from "../../pages/api/hardcoded-data";

export interface RestaurantHeaderProps {
  title: string;
  photoUrl: string;
}

export const RestaurantHeader = (props: RestaurantHeaderProps) => {
  return (
    <div
      className="text-white text-xl font-semibold pb-32 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url('${props.photoUrl}')`,
      }}
    >
      <div className="bg-gray-800 bg-opacity-60 flex flex-row items-center py-4">
        <Link href="/">
          <a className="mx-3 p-2 text-sm bg-gray-200 text-black rounded-full hover:bg-white">
            <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
          </a>
        </Link>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default RestaurantHeader;

setupPreviews(RestaurantHeader, {
  default: {
    title: "Restaurant name",
    photoUrl: RESTAURANT_LIST[0].photoUrl,
  },
});
