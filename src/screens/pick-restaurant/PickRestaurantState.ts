import { atom } from "jotai";
import { AppState } from "../../AppState";

export class PickRestaurantState {
  readonly searchAtom = atom("");
  readonly filteredRestaurantListAtom = atom((get) => {
    const search = get(this.searchAtom).toLowerCase().trim();
    return get(this.app.restaurantList).filter((restaurant) =>
      restaurant.name.toLowerCase().includes(search)
    );
  });

  constructor(private readonly app: AppState) {}
}
