import { Atom, atom } from "jotai";
import { AppState } from "../../AppState";
import { RestaurantData } from "../../models";

export class RestaurantListPageState {
  readonly searchAtom = atom("");
  readonly filteredRestaurantListAtom: Atom<RestaurantData[]>;

  constructor(app: AppState) {
    this.filteredRestaurantListAtom = atom((get) => {
      const search = get(this.searchAtom).toLowerCase().trim();
      return get(app.restaurantList).filter((restaurant) =>
        restaurant.name.toLowerCase().includes(search)
      );
    });
  }
}
