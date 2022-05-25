import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import type { RestaurantItem } from "../../pages/api/restaurants";

export const RestaurantListItem = ({
  restaurant,
}: {
  restaurant: RestaurantItem;
}) => {
  return (
    <Link href={`/restaurants/${restaurant.id}`}>
      <a
        className="pt-28 pb-6 px-3 cursor-pointer text-white text-xl filter hover:brightness-125 flex flex-row justify-between bg-no-repeat bg-cover bg-center group"
        style={{
          backgroundImage: `linear-gradient(hsla(0, 0%, 40%, 0.2), hsla(0, 0%, 0%, 0.2)), url('${restaurant.photoUrl}')`,
        }}
      >
        <div className="rounded-md bg-gray-600 bg-opacity-60 p-2 group-hover:bg-white group-hover:bg-opacity-80 group-hover:text-black">
          {restaurant.name}
        </div>
        <div className="w-6">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </a>
    </Link>
  );
};
