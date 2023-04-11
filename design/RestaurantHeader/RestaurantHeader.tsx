import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

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
        <Link
          href="/"
          className="mx-3 p-2 text-sm bg-gray-200 text-black rounded-full hover:bg-white"
        >
          <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
        </Link>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default RestaurantHeader;
